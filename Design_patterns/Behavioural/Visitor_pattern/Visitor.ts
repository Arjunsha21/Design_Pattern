// Visitor interface
interface QuestionVisitor {
  visitMCQ(mcq: MCQQuestion): void;
  visitFillInBlank(fib: FillInBlankQuestion): void;
  visitTrueFalse(tf: TrueFalseQuestion): void;
}

// Element interface
interface Question {
  accept(visitor: QuestionVisitor): void;
}

// Concrete Question classes
class MCQQuestion implements Question {
  constructor(public text: string, public options: string[], public answer: string) {}

  accept(visitor: QuestionVisitor): void {
    visitor.visitMCQ(this);
  }
}

class FillInBlankQuestion implements Question {
  constructor(public text: string, public correctAnswer: string) {}

  accept(visitor: QuestionVisitor): void {
    visitor.visitFillInBlank(this);
  }
}

class TrueFalseQuestion implements Question {
  constructor(public text: string, public correctAnswer: boolean) {}

  accept(visitor: QuestionVisitor): void {
    visitor.visitTrueFalse(this);
  }
}

// Concrete Visitor 1 - Evaluator
class EvaluationVisitor implements QuestionVisitor {
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

// Concrete Visitor 2 - Hint Generator
class HintVisitor implements QuestionVisitor {
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

// Usage
const questions: Question[] = [
  new MCQQuestion("What is 2 + 2?", ["2", "3", "4"], "4"),
  new FillInBlankQuestion("The capital of France is ___", "Paris"),
  new TrueFalseQuestion("Earth is flat", false),
];

const evaluator = new EvaluationVisitor();
const hintGen = new HintVisitor();

console.log(" Evaluating Questions...");
questions.forEach(q => q.accept(evaluator));

console.log("\n Generating Hints...");
questions.forEach(q => q.accept(hintGen));
