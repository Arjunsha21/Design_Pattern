// --------- Expression Interface ----------
interface Expression {
  interpret(context: string): boolean;
}

// --------- Terminal Expressions ----------
class KeywordExpression implements Expression {
  constructor(private keyword: string) {}
  interpret(context: string): boolean {
    return context.toLowerCase().includes(this.keyword.toLowerCase());
  }
}

// --------- Non-Terminal Expressions ----------
class AndExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(context: string): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}

class OrExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(context: string): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}

// --------- Usage in Mindspark ----------
const studentAnswers = [
  "Photosynthesis produces oxygen and glucose",
  "Evaporation happens in the water cycle",
  "Animals breathe oxygen",
];

// Define rules for questions
const q1Rule = new AndExpression(
  new KeywordExpression("photosynthesis"),
  new KeywordExpression("oxygen")
);

const q2Rule = new AndExpression(
  new KeywordExpression("water"),
  new KeywordExpression("evaporation")
);

console.log("🔎 Evaluating student answers:");
studentAnswers.forEach((answer, index) => {
  const q1Result = q1Rule.interpret(answer);
  const q2Result = q2Rule.interpret(answer);
  console.log(`Answer ${index + 1}: Q1: ${q1Result ? "✅" : "❌"}, Q2: ${q2Result ? "✅" : "❌"}`);
});

// // Simple keyword-based evaluation without Interpreter

// const studentAnswers = [
//   "Photosynthesis produces oxygen and glucose",
//   "Evaporation happens in the water cycle",
//   "Animals breathe oxygen",
// ];

// // Hard-coded rules for each question
// function evaluateQ1(answer: string): boolean {
//   return answer.toLowerCase().includes("photosynthesis") &&
//          answer.toLowerCase().includes("oxygen");
// }

// function evaluateQ2(answer: string): boolean {
//   return answer.toLowerCase().includes("water") &&
//          answer.toLowerCase().includes("evaporation");
// }

// // Usage
// console.log("🔎 Evaluating student answers:");
// studentAnswers.forEach((answer, index) => {
//   const q1Result = evaluateQ1(answer);
//   const q2Result = evaluateQ2(answer);
//   console.log(`Answer ${index + 1}: Q1: ${q1Result ? "✅" : "❌"}, Q2: ${q2Result ? "✅" : "❌"}`);
// });
