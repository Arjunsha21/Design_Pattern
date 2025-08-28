// Student.ts
import { IObserver } from "./IObserver";

export class Student implements IObserver {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received notification: ${message}`);
  }
}
