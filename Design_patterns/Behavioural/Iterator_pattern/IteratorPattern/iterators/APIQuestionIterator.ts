// iterators/APIQuestionIterator.ts
export class APIQuestionIterator implements AsyncIterator<string> {
    private index = 0;
  
    constructor(private questions: string[]) {
      if (!Array.isArray(questions)) {
        throw new Error("Questions must be an array of strings");
      }
    }
  
    async next(): Promise<IteratorResult<string>> {
      try {
        if (this.index < this.questions.length) {
          const question = this.questions[this.index++];
          // simulate API delay
          await new Promise(res => setTimeout(res, 500));
          return { value: question, done: false };
        }
        return { value: undefined, done: true };
      } catch (error) {
        console.error("Error in APIQuestionIterator:", error);
        return { value: undefined, done: true };
      }
    }
  }
  