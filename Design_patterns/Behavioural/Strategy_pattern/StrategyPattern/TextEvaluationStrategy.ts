// TextEvaluationStrategy.ts
import { EvaluationStrategy } from "./EvaluationStrategy";

export class TextEvaluationStrategy implements EvaluationStrategy {
  evaluate(submission: any): string {
    try {
      if (!submission || typeof submission.answer !== "string") {
        throw new Error("Invalid submission for text evaluation");
      }

      return submission.answer.includes("correct")
        ? "Text Answer is Correct"
        : "Text Answer is Incorrect";
    } catch (error: any) {
      return `Error in TextEvaluation: ${error.message}`;
    }
  }
}
