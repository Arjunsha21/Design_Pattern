import { QuestionVisitor } from "../interfaces/QuestionVisitor";
import { MCQQuestion } from "./MCQQuestion";
import { FillInBlankQuestion } from "./FillInBlankQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

export class EvaluationVisitor implements QuestionVisitor {
  visitMCQ(mcq: MCQQuestion): void {
    console.log(`Evaluating MCQ: ${mcq.text} → Correct: ${mcq.answer}`);
  }
  visitFillInBlank(fib: FillInBlankQuestion): void {
    console.log(`Evaluating FillInBlank: ${fib.text} → Correct: ${fib.correctAnswer}`);
  }
  visitTrueFalse(tf: TrueFalseQuestion): void {
    console.log(`Evaluating True/False: ${tf.text} → Correct: ${tf.correctAnswer}`);
  }
}
