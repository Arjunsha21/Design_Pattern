import { MCQQuestion } from "./classes/MCQQuestion";
import { FillInBlankQuestion } from "./classes/FillInBlankQuestion";
import { TrueFalseQuestion } from "./classes/TrueFalseQuestion";
import { EvaluationVisitor } from "./classes/EvaluationVisitor";
import { HintVisitor } from "./classes/HintVisitor";
import { Question } from "./interfaces/Question";

const questions: Question[] = [
  new MCQQuestion("What is 2 + 2?", ["2", "3", "4"], "4"),
  new FillInBlankQuestion("The capital of France is ___", "Paris"),
  new TrueFalseQuestion("Earth is flat", false),
];

const evaluator = new EvaluationVisitor();
const hintGen = new HintVisitor();

console.log("🔎 Evaluating Questions...");
questions.forEach(q => q.accept(evaluator));

console.log("\n💡 Generating Hints...");
questions.forEach(q => q.accept(hintGen));
