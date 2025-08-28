// index.ts
import { HomeworkEvaluator } from "./HomeworkEvaluator";
import { TextEvaluationStrategy } from "./TextEvaluationStrategy";
import { ImageEvaluationStrategy } from "./ImageEvaluationStrategy";
import { MCQEvaluationStrategy } from "./MCQEvaluationStrategy";

// Submissions
const textSubmission = { answer: "This is correct answer" };
const imageSubmission = { hasClearImage: false };
const mcqSubmission = { selectedOption: "B", correctOption: "C" };

// Context with Strategy
const evaluator = new HomeworkEvaluator(new TextEvaluationStrategy());
console.log(evaluator.evaluateSubmission(textSubmission)); 
// ✅ Text Answer is Correct

evaluator.setStrategy(new ImageEvaluationStrategy());
console.log(evaluator.evaluateSubmission(imageSubmission)); 
// ⚠️ Image is blurry, please re-upload

evaluator.setStrategy(new MCQEvaluationStrategy());
console.log(evaluator.evaluateSubmission(mcqSubmission)); 
// ❌ MCQ Answer is Incorrect
