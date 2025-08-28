// iterators/IncorrectAnswerIterator.ts
import { QuestionIterator } from "../interfaces/QuestionIterator";

export class IncorrectAnswerIterator implements QuestionIterator {
  private index = 0;

  constructor(private questions: { q: string; correct: boolean }[]) {
    if (!Array.isArray(questions)) {
      throw new Error("Questions must be an array of objects {q, correct}");
    }
  }

  next(): IteratorResult<string> {
    try {
      while (this.index < this.questions.length) {
        const current = this.questions[this.index++];
        if (!current.correct) {
          return { value: current.q, done: false };
        }
      }
      return { value: undefined, done: true };
    } catch (error) {
      console.error("Error in IncorrectAnswerIterator:", error);
      return { value: undefined, done: true };
    }
  }
}
