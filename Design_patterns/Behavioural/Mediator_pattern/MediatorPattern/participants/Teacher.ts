import { Participant } from "./Participant";

export class Teacher extends Participant {
  receiveMessage(message: string): void {
    try {
      console.log(`Teacher ${this.name} received: ${message}`);
    } catch (error) {
      console.error(`Error for Teacher ${this.name} while receiving message:`, error);
    }
  }
}
