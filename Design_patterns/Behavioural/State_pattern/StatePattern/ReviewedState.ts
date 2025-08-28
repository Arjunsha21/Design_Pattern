// ReviewedState.ts
import { HomeworkState } from "./HomeworkState";
import { Homework } from "./Homework";

export class ReviewedState implements HomeworkState {
  constructor(private context: Homework) {}

  submit(): void {
    console.log("Homework already reviewed. Cannot resubmit.");
  }

  review(): void {
    console.log("Homework already reviewed.");
  }
}
