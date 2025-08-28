// StudentAnswer.ts
import { AnswerMemento } from "./AnswerMemento";

export class StudentAnswer {
  private currentAnswer: string = "";

  write(answer: string) {
    if (!answer || answer.trim().length === 0) {
      throw new Error("Answer cannot be empty.");
    }
    this.currentAnswer = answer;
    console.log(`Student wrote: ${answer}`);
  }

  save(): AnswerMemento {
    if (!this.currentAnswer) {
      throw new Error("No answer to save.");
    }
    return new AnswerMemento(this.currentAnswer);
  }

  restore(memento: AnswerMemento) {
    if (!memento) {
      throw new Error("Invalid memento: Cannot restore.");
    }
    this.currentAnswer = memento.state;
    console.log(`Restored to: ${this.currentAnswer}`);
  }
}
