import { Command } from "../interfaces/Command";

export class ActionInvoker {
  private history: Command[] = [];

  executeCommand(command: Command) {
    try {
      command.execute();
      this.history.push(command);
    } catch (error) {
      console.error("Error executing command in Invoker:", (error as Error).message);
    }
  }

  undoLast() {
    const command = this.history.pop();
    if (command) {
      try {
        command.undo();
      } catch (error) {
        console.error("Error undoing command:", (error as Error).message);
      }
    } else {
      console.warn("No command to undo.");
    }
  }
}
