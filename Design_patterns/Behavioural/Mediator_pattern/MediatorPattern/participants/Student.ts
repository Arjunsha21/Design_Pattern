import { Participant } from "./Participant";

export class Student extends Participant {
  receiveMessage(message: string): void {
    try {
      console.log(`Student ${this.name} received: ${message}`);
    } catch (error) {
      console.error(`Error for Student ${this.name} while receiving message:`, error);
    }
  }
}
