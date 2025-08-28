import { Question } from "../interfaces/Question";
import { QuestionVisitor } from "../interfaces/QuestionVisitor";

export class FillInBlankQuestion implements Question {
  constructor(public text: string, public correctAnswer: string) {}

  accept(visitor: QuestionVisitor): void {
    visitor.visitFillInBlank(this);
  }
}
