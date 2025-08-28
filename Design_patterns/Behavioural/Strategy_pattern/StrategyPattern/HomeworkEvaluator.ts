// HomeworkEvaluator.ts
import { EvaluationStrategy } from "./EvaluationStrategy";

export class HomeworkEvaluator {
  private strategy: EvaluationStrategy;

  constructor(strategy: EvaluationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: EvaluationStrategy) {
    this.strategy = strategy;
  }

  evaluateSubmission(submission: any): string {
    try {
      return this.strategy.evaluate(submission);
    } catch (error: any) {
      return `Error in HomeworkEvaluator: ${error.message}`;
    }
  }
}
