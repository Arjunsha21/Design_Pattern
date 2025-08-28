import { Question } from "../interfaces/Question";
import { QuestionVisitor } from "../interfaces/QuestionVisitor";

export class MCQQuestion implements Question {
  constructor(public text: string, public options: string[], public answer: string) {}

  accept(visitor: QuestionVisitor): void {
    visitor.visitMCQ(this);
  }
}
