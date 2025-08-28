import { Question } from "../interfaces/Question";
import { QuestionVisitor } from "../interfaces/QuestionVisitor";

export class TrueFalseQuestion implements Question {
  constructor(public text: string, public correctAnswer: boolean) {}

  accept(visitor: QuestionVisitor): void {
    visitor.visitTrueFalse(this);
  }
}
