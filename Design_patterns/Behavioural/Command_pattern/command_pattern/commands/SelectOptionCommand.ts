import { Command } from "../interfaces/Command";
import { StudentActionReceiver } from "../receiver/StudentActionReceiver";

export class SelectOptionCommand implements Command {
  constructor(private receiver: StudentActionReceiver, private option: string) {}

  execute(): void {
    try {
      this.receiver.selectOption(this.option);
    } catch (error) {
      console.error("Error executing SelectOptionCommand:", (error as Error).message);
    }
  }

  undo(): void {
    console.log(`Undo select option: ${this.option}`);
  }
}
