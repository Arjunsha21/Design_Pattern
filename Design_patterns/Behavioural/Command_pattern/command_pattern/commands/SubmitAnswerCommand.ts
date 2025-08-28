import { Command } from "../interfaces/Command";
import { StudentActionReceiver } from "../receiver/StudentActionReceiver";

export class SubmitAnswerCommand implements Command {
  constructor(private receiver: StudentActionReceiver, private answer: string) {}

  execute(): void {
    try {
      this.receiver.submitAnswer(this.answer);
    } catch (error) {
      console.error("Error executing SubmitAnswerCommand:", (error as Error).message);
    }
  }

  undo(): void {
    console.log(`Undo submit answer: ${this.answer}`);
  }
}
