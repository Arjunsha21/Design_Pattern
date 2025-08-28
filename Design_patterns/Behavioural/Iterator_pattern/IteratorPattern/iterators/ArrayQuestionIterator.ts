// iterators/ArrayQuestionIterator.ts
import { QuestionIterator } from "../interfaces/QuestionIterator";

export class ArrayQuestionIterator implements QuestionIterator {
  private index = 0;

  constructor(private questions: string[]) {
    if (!Array.isArray(questions)) {
      throw new Error("Questions must be an array of strings");
    }
  }

  next(): IteratorResult<string> {
    try {
      if (this.index < this.questions.length) {
        return { value: this.questions[this.index++], done: false };
      }
      return { value: undefined, done: true };
    } catch (error) {
      console.error("Error in ArrayQuestionIterator:", error);
      return { value: undefined, done: true };
    }
  }
}
