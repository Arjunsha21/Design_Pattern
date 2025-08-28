// index.ts
import { StudentAnswer } from "./StudentAnswer";
import { AnswerHistory } from "./AnswerHistory";

const student = new StudentAnswer();
const answerHistory = new AnswerHistory();

try {
  student.write("Answer 1");
  answerHistory.push(student.save());

  student.write("Answer 2");
  answerHistory.push(student.save());

  student.write("Answer 3");

  // Undo last answer
  const prev1 = answerHistory.pop();
  if (prev1) student.restore(prev1);

  // Undo again
  const prev2 = answerHistory.pop();
  if (prev2) student.restore(prev2);

  // Extra undo (error handled)
  const prev3 = answerHistory.pop();
  if (prev3) student.restore(prev3);
} catch (err) {
  console.error("Error:", (err as Error).message);
}
