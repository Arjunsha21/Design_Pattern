
import { QuestionVisitor } from "./QuestionVisitor";

export interface Question {
  accept(visitor: QuestionVisitor): void;
}
