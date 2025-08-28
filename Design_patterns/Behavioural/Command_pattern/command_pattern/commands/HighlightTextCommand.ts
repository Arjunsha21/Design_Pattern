import { Command } from "../interfaces/Command";
import { StudentActionReceiver } from "../receiver/StudentActionReceiver";

export class HighlightTextCommand implements Command {
  constructor(private receiver: StudentActionReceiver, private text: string) {}

  execute(): void {
    try {
      this.receiver.highlightText(this.text);
    } catch (error) {
      console.error("Error executing HighlightTextCommand:", (error as Error).message);
    }
  }

  undo(): void {
    console.log(`Undo highlight: "${this.text}"`);
  }
}
