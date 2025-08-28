// MCQEvaluationStrategy.ts
import { EvaluationStrategy } from "./EvaluationStrategy";

export class MCQEvaluationStrategy implements EvaluationStrategy {
  evaluate(submission: any): string {
    try {
      if (
        !submission ||
        !("selectedOption" in submission) ||
        !("correctOption" in submission)
      ) {
        throw new Error("Invalid submission for MCQ evaluation");
      }

      return submission.selectedOption === submission.correctOption
        ? "MCQ Answer is Correct"
        : "MCQ Answer is Incorrect";
    } catch (error: any) {
      return `Error in MCQEvaluation: ${error.message}`;
    }
  }
}
