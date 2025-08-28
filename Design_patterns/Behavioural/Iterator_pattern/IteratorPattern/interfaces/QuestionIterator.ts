// interfaces/QuestionIterator.ts
export interface QuestionIterator extends Iterator<string> {
    next(): IteratorResult<string>;
  }
  