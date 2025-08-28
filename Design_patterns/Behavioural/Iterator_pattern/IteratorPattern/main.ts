// main.ts
import { ArrayQuestionIterator } from "./iterators/ArrayQuestionIterator";
import { APIQuestionIterator } from "./iterators/APIQuestionIterator";
import { IncorrectAnswerIterator } from "./iterators/IncorrectAnswerIterator";
import { showQuestions } from "./client";

(async () => {
  try {
    const mathIterator = new ArrayQuestionIterator([
      "2+2=?",
      "Square root of 16?",
      "10/2=?"
    ]);

    const scienceIterator = new APIQuestionIterator([
      "What is H2O?",
      "What planet is known as the Red Planet?"
    ]);

    const incorrectIterator = new IncorrectAnswerIterator([
      { q: "Is sun a planet?", correct: false },
      { q: "Is Earth flat?", correct: false },
      { q: "Is gravity real?", correct: true }
    ]);

    console.log("\n--- Math Questions ---");
    await showQuestions(mathIterator);

    console.log("\n--- Science Questions (from API) ---");
    await showQuestions(scienceIterator);

    console.log("\n--- Incorrect Questions ---");
    await showQuestions(incorrectIterator);

  } catch (error) {
    console.error("Unexpected error in main:", error);
  }
})();
