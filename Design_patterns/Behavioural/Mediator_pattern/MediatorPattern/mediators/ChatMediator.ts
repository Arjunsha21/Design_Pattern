import { Mediator } from "../interfaces/Mediator";

export class ChatMediator implements Mediator {
  private participants: any[] = [];

  addParticipant(participant: any): void {
    if (!participant) {
      throw new Error("Cannot add undefined participant");
    }
    this.participants.push(participant);
  }

  sendMessage(message: string, sender: any): void {
    if (!message) {
      console.error("Mediator cannot send an empty message.");
      return;
    }
    try {
      for (const participant of this.participants) {
        if (participant !== sender) {
          participant.receiveMessage(message);
        }
      }
    } catch (error) {
      console.error("Error in mediator while delivering message:", error);
    }
  }
}
