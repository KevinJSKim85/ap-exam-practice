const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const projectRoot = "/Users/kevinmacbookpro/Documents/ap-exam-practice";
const source = fs.readFileSync(path.join(projectRoot, "ap_custom_sets.js"), "utf8");
const context = { window: {}, globalThis: {} };
vm.createContext(context);
vm.runInContext(source, context);

const subjectData = context.window.AP_CUSTOM_SUBJECTS || context.globalThis.AP_CUSTOM_SUBJECTS;
const setData = context.window.AP_CUSTOM_DYNAMIC_SETS || context.globalThis.AP_CUSTOM_DYNAMIC_SETS;

test("custom subjects expose three source-locked subjects", () => {
  assert.equal(subjectData.length, 3);
  assert.equal(
    JSON.stringify(subjectData.map((subject) => subject.key)),
    JSON.stringify(["chem", "stats", "ush"]),
  );
});

test("custom sets expose three sets per subject", () => {
  assert.equal(setData.length, 9);
  for (const key of ["chem", "stats", "ush"]) {
    assert.equal(setData.filter((set) => set.subjectKey === key).length, 3);
  }
});

test("every custom MCQ is structurally valid and asset-safe", () => {
  const seenPerSubject = new Map();
  for (const set of setData) {
    assert.ok(Array.isArray(set.mc) && set.mc.length >= 18);
    assert.ok(Array.isArray(set.frq) && set.frq.length >= 2);
    const seen = seenPerSubject.get(set.subjectKey) || new Set();
    for (const question of set.mc) {
      assert.ok(typeof question.q === "string" && question.q.length > 0);
      assert.ok(Array.isArray(question.choices) && question.choices.length >= 4);
      assert.ok(Number.isInteger(question.answer));
      assert.ok(question.answer >= 0 && question.answer < question.choices.length);
      assert.ok(typeof question.explanation === "string" && question.explanation.length > 0);
      assert.ok(typeof question.source === "string" && question.source.includes("CrackAP"));
      const normalized = JSON.stringify({
        q: question.q.replace(/\s+/g, " ").trim(),
        choices: question.choices.map((choice) => choice.replace(/\s+/g, " ").trim()),
      });
      assert.ok(!seen.has(normalized), `duplicate question in ${set.subjectKey}`);
      seen.add(normalized);
      const matches = [...question.q.matchAll(/src="([^"]+)"/g)];
      for (const match of matches) {
        const localFile = path.join(projectRoot, match[1]);
        assert.ok(fs.existsSync(localFile), `missing local asset ${localFile}`);
      }
    }
    seenPerSubject.set(set.subjectKey, seen);
  }
});

test("every FRQ references mirrored official PDFs and usable rubrics", () => {
  for (const set of setData) {
    for (const question of set.frq) {
      assert.ok(typeof question.text === "string" && question.text.includes(".pdf"));
      assert.ok(Number.isInteger(question.maxPoints) && question.maxPoints >= 5);
      assert.ok(Array.isArray(question.rubric) && question.rubric.length >= 5);
      const matches = [...question.text.matchAll(/href="([^"]+\.pdf)"/g)];
      assert.ok(matches.length >= 2);
      for (const match of matches) {
        const localFile = path.join(projectRoot, match[1]);
        assert.ok(fs.existsSync(localFile), `missing mirrored pdf ${localFile}`);
      }
    }
  }
});
