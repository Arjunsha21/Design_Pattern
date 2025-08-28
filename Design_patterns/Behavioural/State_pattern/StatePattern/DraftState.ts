// DraftState.ts
import { HomeworkState } from "./HomeworkState";
import { Homework } from "./Homework";
import { SubmittedState } from "./SubmittedState";

export class DraftState implements HomeworkState {
  constructor(private context: Homework) {}

  submit(): void {
    try {
      console.log("Homework submitted for review.");
      this.context.setState(new SubmittedState(this.context));
    } catch (error) {
      console.error("Error while submitting from Draft state:", error);
    }
  }

  review(): void {
    console.log("Homework is still in Draft. Cannot review.");
  }
}
