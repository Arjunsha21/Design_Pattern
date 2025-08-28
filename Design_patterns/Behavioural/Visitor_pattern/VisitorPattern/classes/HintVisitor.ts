import { QuestionVisitor } from "../interfaces/QuestionVisitor";
import { MCQQuestion } from "./MCQQuestion";
import { FillInBlankQuestion } from "./FillInBlankQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

export class HintVisitor implements QuestionVisitor {
  visitMCQ(mcq: MCQQuestion): void {
    console.log(`Hint for MCQ: Eliminate wrong options to find ${mcq.answer}`);
  }
  visitFillInBlank(fib: FillInBlankQuestion): void {
    console.log(`Hint for FillInBlank: Think about grammar and context.`);
  }
  visitTrueFalse(tf: TrueFalseQuestion): void {
    console.log(`Hint for True/False: Carefully read the statement.`);
  }
}
