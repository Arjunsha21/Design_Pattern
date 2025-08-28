export interface Mediator {
    sendMessage(message: string, sender: any): void;
    addParticipant(participant: any): void;
  }
  