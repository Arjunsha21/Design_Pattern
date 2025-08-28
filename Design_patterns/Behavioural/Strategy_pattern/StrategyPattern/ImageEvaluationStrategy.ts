// ImageEvaluationStrategy.ts
import { EvaluationStrategy } from "./EvaluationStrategy";

export class ImageEvaluationStrategy implements EvaluationStrategy {
  evaluate(submission: any): string {
    try {
      if (!submission || typeof submission.hasClearImage !== "boolean") {
        throw new Error("Invalid submission for image evaluation");
      }

      return submission.hasClearImage
        ? "Image Answer Accepted"
        : "Image is blurry, please re-upload";
    } catch (error: any) {
      return `Error in ImageEvaluation: ${error.message}`;
    }
  }
}
