const test = require("node:test");
const assert = require("node:assert/strict");

const {
  LETTERS,
  computeChoiceOrder,
  mapActualAnswerToDisplay,
  mapDisplayAnswerToActual,
  buildImmediateFeedback,
  computeRubricScore,
  normalizeRubric,
} = require("../ap_exam_engine.js");

test("computeChoiceOrder is deterministic and preserves all choice indexes", () => {
  const orderA = computeChoiceOrder(
    { choices: ["A", "B", "C", "D"] },
    "chem_set1",
    0,
    12345,
  );
  const orderB = computeChoiceOrder(
    { choices: ["A", "B", "C", "D"] },
    "chem_set1",
    0,
    12345,
  );

  assert.deepEqual(orderA, orderB);
  assert.deepEqual([...orderA].sort((left, right) => left - right), [0, 1, 2, 3]);
});

test("answer mapping round-trips between actual and display indexes", () => {
  const question = { choices: ["A", "B", "C", "D"], answer: 2 };
  const order = computeChoiceOrder(question, "stats_set2", 4, 9876);
  const displayIndex = mapActualAnswerToDisplay(question.answer, order);
  const actualIndex = mapDisplayAnswerToActual(displayIndex, order);

  assert.equal(actualIndex, question.answer);
  assert.ok(displayIndex >= 0);
  assert.ok(displayIndex < order.length);
});

test("buildImmediateFeedback reports correctness using display letters", () => {
  const question = {
    choices: ["Alpha", "Beta", "Gamma", "Delta"],
    answer: 1,
    explanation: "Beta is supported by the source data.",
  };
  const order = [2, 1, 0, 3];
  const feedback = buildImmediateFeedback(question, 1, order);

  assert.equal(feedback.correct, true);
  assert.equal(feedback.correctLetter, LETTERS[1]);
  assert.match(feedback.explanation, /source data/);
});

test("normalizeRubric and computeRubricScore support checklist scoring", () => {
  const rubric = normalizeRubric([
    { part: "(a)", desc: "States the correct sampling method", pts: 2 },
    { part: "(b)", desc: "Explains bias clearly", pts: 2 },
    { part: "(c)", desc: "Uses context-specific evidence", pts: 1 },
  ]);
  const checked = {
    stats_set1_0_0: true,
    stats_set1_0_1: false,
    stats_set1_0_2: true,
  };

  const score = computeRubricScore("stats_set1", 0, rubric, checked);

  assert.equal(score.earned, 3);
  assert.equal(score.possible, 5);
});
