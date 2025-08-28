import { MCQQuestion } from "../classes/MCQQuestion";
import { FillInBlankQuestion } from "../classes/FillInBlankQuestion";
import { TrueFalseQuestion } from "../classes/TrueFalseQuestion";

export interface QuestionVisitor {
  visitMCQ(mcq: MCQQuestion): void;
  visitFillInBlank(fib: FillInBlankQuestion): void;
  visitTrueFalse(tf: TrueFalseQuestion): void;
}