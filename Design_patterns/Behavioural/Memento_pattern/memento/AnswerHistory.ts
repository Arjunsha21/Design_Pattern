// AnswerHistory.ts
import { AnswerMemento } from "./AnswerMemento";

export class AnswerHistory {
  private mementos: AnswerMemento[] = [];

  push(memento: AnswerMemento) {
    if (!memento) {
      throw new Error("Cannot push an invalid memento.");
    }
    this.mementos.push(memento);
  }

  pop(): AnswerMemento | undefined {
    if (this.mementos.length === 0) {
      console.warn("No history available to undo.");
      return undefined;
    }
    return this.mementos.pop();
  }
}
