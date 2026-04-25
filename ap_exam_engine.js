(function buildAPExamEngine(root) {
  const LETTERS = ["A", "B", "C", "D", "E"];

  function hashString(input) {
    let hash = 2166136261;
    for (let index = 0; index < input.length; index += 1) {
      hash ^= input.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function mulberry32(seed) {
    let value = seed >>> 0;
    return function next() {
      value += 0x6d2b79f5;
      let result = value;
      result = Math.imul(result ^ (result >>> 15), result | 1);
      result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
      return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
  }

  function computeChoiceOrder(question, examId, questionIndex, attemptSeed) {
    const order = Array.from(
      { length: Array.isArray(question.choices) ? question.choices.length : 0 },
      (_, index) => index,
    );
    const random = mulberry32(
      hashString(`${examId}:${questionIndex}:${attemptSeed}:${question.q || ""}`),
    );

    for (let index = order.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      const temp = order[index];
      order[index] = order[swapIndex];
      order[swapIndex] = temp;
    }

    return order;
  }

  function mapDisplayAnswerToActual(displayIndex, order) {
    return order[displayIndex];
  }

  function mapActualAnswerToDisplay(actualIndex, order) {
    return order.indexOf(actualIndex);
  }

  function normalizeRubric(rubric) {
    if (!rubric) return [];
    if (typeof rubric === "string") {
      return rubric
        .split(";")
        .map((entry, index) => ({
          part: `(${index + 1})`,
          desc: entry.trim(),
          pts: 1,
        }))
        .filter((entry) => entry.desc);
    }
    if (!Array.isArray(rubric)) return [];

    return rubric
      .map((entry, index) => {
        if (typeof entry === "string") {
          return { part: `(${index + 1})`, desc: entry.trim(), pts: 1 };
        }
        if (!entry || typeof entry !== "object") return null;
        return {
          part: entry.part || `(${index + 1})`,
          desc: entry.desc || "",
          pts: typeof entry.pts === "number" ? entry.pts : 1,
        };
      })
      .filter(Boolean);
  }

  function computeRubricScore(examId, frqIndex, rubric, checkedMap) {
    const normalized = normalizeRubric(rubric);
    return normalized.reduce(
      (totals, entry, rubricIndex) => {
        const key = `${examId}_${frqIndex}_${rubricIndex}`;
        const earned = checkedMap[key] ? entry.pts : 0;
        return {
          earned: totals.earned + earned,
          possible: totals.possible + entry.pts,
        };
      },
      { earned: 0, possible: 0 },
    );
  }

  function buildImmediateFeedback(question, actualAnswerIndex, order) {
    const correctDisplayIndex = mapActualAnswerToDisplay(question.answer, order);
    const selectedDisplayIndex = mapActualAnswerToDisplay(actualAnswerIndex, order);
    return {
      correct: actualAnswerIndex === question.answer,
      selectedLetter:
        selectedDisplayIndex >= 0 ? LETTERS[selectedDisplayIndex] : null,
      correctLetter:
        correctDisplayIndex >= 0 ? LETTERS[correctDisplayIndex] : null,
      explanation: question.explanation || "",
    };
  }

  const api = {
    LETTERS,
    computeChoiceOrder,
    mapDisplayAnswerToActual,
    mapActualAnswerToDisplay,
    normalizeRubric,
    computeRubricScore,
    buildImmediateFeedback,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  root.APExamEngine = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
