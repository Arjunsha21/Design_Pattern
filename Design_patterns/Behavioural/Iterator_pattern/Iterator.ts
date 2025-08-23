// Iterator.ts

// 1. Define a generic QuestionIterator interface
interface QuestionIterator extends Iterator<string> {
  next(): IteratorResult<string>;
}

// 2. ArrayQuestionIterator (questions stored in array)
class ArrayQuestionIterator implements QuestionIterator {
  private index = 0;

  constructor(private questions: string[]) {}

  next(): IteratorResult<string> {
    if (this.index < this.questions.length) {
      return {
        value: this.questions[this.index++],
        done: false
      };
    } else {
      return {
        value: undefined,
        done: true
      };
    }
  }
}

// 3. APIQuestionIterator (simulate async API call)
class APIQuestionIterator implements AsyncIterator<string> {
  private index = 0;

  constructor(private questions: string[]) {}

  async next(): Promise<IteratorResult<string>> {
    if (this.index < this.questions.length) {
      const question = this.questions[this.index++];
      // simulate API delay
      await new Promise(res => setTimeout(res, 500));
      return { value: question, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

// 4. IncorrectAnswerIterator (filter out correct answers)
class IncorrectAnswerIterator implements QuestionIterator {
  private index = 0;

  constructor(private questions: { q: string; correct: boolean }[]) {}

  next(): IteratorResult<string> {
    while (this.index < this.questions.length) {
      const current = this.questions[this.index++];
      if (!current.correct) {
        return { value: current.q, done: false };
      }
    }
    return { value: undefined, done: true };
  }
}

// 5. Client function
async function showQuestions(iterator: Iterator<string> | AsyncIterator<string>) {
  let result = await iterator.next();

  while (!result.done) {
    console.log("Question:", result.value);
    result = await iterator.next();
  }
}

// 6. Usage
(async () => {
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
})();

// WithOut Iteartor Pattern
// // Without Iterator Pattern

// // Example 1: Questions from an array
// async function showArrayQuestions() {
//   const questions = ["2 + 2 = ?", "5 * 3 = ?", "10 - 4 = ?"];
//   for (const q of questions) {
//     console.log("Question:", q);
//   }
// }

// // Example 2: Questions from an API
// async function showAPIQuestions() {
//   const questions = await fetchQuestionsFromAPI();
//   for (const q of questions) {
//     console.log("Question:", q);
//   }
// }

// async function fetchQuestionsFromAPI(): Promise<string[]> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["What is H2O?", "What planet is known as the Red Planet?"]);
//     }, 1000);
//   });
// }

// // Example 3: Incorrect answers
// async function showIncorrectAnswers() {
//   const incorrectAnswers = ["5", "12", "Venus"];
//   for (const a of incorrectAnswers) {
//     console.log("Incorrect Answer:", a);
//   }
// }

// // MAIN
// async function main() {
//   console.log("\n--- Array Questions ---");
//   await showArrayQuestions();

//   console.log("\n--- API Questions ---");
//   await showAPIQuestions();

//   console.log("\n--- Incorrect Answers ---");
//   await showIncorrectAnswers();
// }

// main();
