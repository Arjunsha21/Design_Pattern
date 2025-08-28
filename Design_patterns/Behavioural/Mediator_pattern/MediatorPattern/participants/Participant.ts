import { Mediator } from "../interfaces/Mediator";

export abstract class Participant {
  protected mediator: Mediator;
  protected name: string;

  constructor(name: string, mediator: Mediator) {
    if (!name) {
      throw new Error("Participant must have a name");
    }
    if (!mediator) {
      throw new Error("Mediator is required");
    }
    this.name = name;
    this.mediator = mediator;
    this.mediator.addParticipant(this);
  }

  abstract receiveMessage(message: string): void;

  sendMessage(message: string) {
    if (!message) {
      console.error(`${this.name} tried to send an empty message.`);
      return;
    }
    console.log(`${this.name} sends: ${message}`);
    try {
      this.mediator.sendMessage(message, this);
    } catch (error) {
      console.error(`Error sending message from ${this.name}:`, error);
    }
  }
}
