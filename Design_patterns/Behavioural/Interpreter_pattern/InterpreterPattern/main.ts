// main.ts
import { KeywordExpression } from "./KeywordExpression";
import { AndExpression } from "./AndExpression";
import { OrExpression } from "./OrExpression";

const studentAnswers = [
  "Photosynthesis produces oxygen and glucose",
  "Evaporation happens in the water cycle",
  "Animals breathe oxygen",
];

// Define rules
const q1Rule = new AndExpression(
  new KeywordExpression("photosynthesis"),
  new KeywordExpression("oxygen")
);

const q2Rule = new AndExpression(
  new KeywordExpression("water"),
  new KeywordExpression("evaporation")
);

console.log("Evaluating student answers:");
studentAnswers.forEach((answer, index) => {
  const q1Result = q1Rule.interpret(answer);
  const q2Result = q2Rule.interpret(answer);
  console.log(
    `Answer ${index + 1}: Q1: ${q1Result ? "✅" : "❌"}, Q2: ${q2Result ? "✅" : "❌"}`
  );
});
