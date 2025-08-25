// 1. Strategy Interface
interface EvaluationStrategy {
  evaluate(submission: any): string;
}

// 2. Concrete Strategies
class TextEvaluationStrategy implements EvaluationStrategy {
  evaluate(submission: any): string {
    return submission.answer.includes("correct")
      ? "Text Answer is Correct "
      : "Text Answer is Incorrect ";
  }
}

class ImageEvaluationStrategy implements EvaluationStrategy {
  evaluate(submission: any): string {
    return submission.hasClearImage
      ? "Image Answer Accepted "
      : "Image is blurry , please re-upload";
  }
}

class MCQEvaluationStrategy implements EvaluationStrategy {
  evaluate(submission: any): string {
    return submission.selectedOption === submission.correctOption
      ? "MCQ Answer is Correct "
      : "MCQ Answer is Incorrect ";
  }
}

// 3. Context
class HomeworkEvaluator {
  private strategy: EvaluationStrategy;

  constructor(strategy: EvaluationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: EvaluationStrategy) {
    this.strategy = strategy;
  }

  evaluateSubmission(submission: any): string {
    return this.strategy.evaluate(submission);
  }
}

// 4. Usage
const textSubmission = { answer: "This is correct answer" };
const imageSubmission = { hasClearImage: false };
const mcqSubmission = { selectedOption: "B", correctOption: "C" };

const evaluator = new HomeworkEvaluator(new TextEvaluationStrategy());
console.log(evaluator.evaluateSubmission(textSubmission)); 
//  Text Answer is Correct

evaluator.setStrategy(new ImageEvaluationStrategy());
console.log(evaluator.evaluateSubmission(imageSubmission)); 
//  Image is blurry

evaluator.setStrategy(new MCQEvaluationStrategy());
console.log(evaluator.evaluateSubmission(mcqSubmission)); 
//  MCQ Answer is Incorrect

// // HomeworkEvaluator WITHOUT Strategy Pattern
// class HomeworkEvaluator {
//   evaluateSubmission(submission: any, type: string): string {
//     if (type === "text") {
//       return submission.answer.includes("correct")
//         ? "Text Answer is Correct "
//         : "Text Answer is Incorrect ";
//     } 
//     else if (type === "image") {
//       return submission.hasClearImage
//         ? "Image Answer Accepted "
//         : "Image is blurry , please re-upload";
//     } 
//     else if (type === "mcq") {
//       return submission.selectedOption === submission.correctOption
//         ? "MCQ Answer is Correct "
//         : "MCQ Answer is Incorrect ";
//     } 
//     else {
//       return "Unknown submission type ";
//     }
//   }
// }

// // Usage
// const textSubmission = { answer: "This is correct answer" };
// const imageSubmission = { hasClearImage: false };
// const mcqSubmission = { selectedOption: "B", correctOption: "C" };

// const evaluator = new HomeworkEvaluator();

// console.log(evaluator.evaluateSubmission(textSubmission, "text"));
// // Text Answer is Correct

// console.log(evaluator.evaluateSubmission(imageSubmission, "image"));
// //  Image is blurry

// console.log(evaluator.evaluateSubmission(mcqSubmission, "mcq"));
// //  MCQ Answer is Incorrect