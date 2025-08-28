// SubmittedState.ts
import { HomeworkState } from "./HomeworkState";
import { Homework } from "./Homework";
import { ReviewedState } from "./ReviewedState";

export class SubmittedState implements HomeworkState {
  constructor(private context: Homework) {}

  submit(): void {
    console.log("Homework already submitted. Cannot submit again.");
  }

  review(): void {
    try {
      console.log("Teacher reviewed the homework.");
      this.context.setState(new ReviewedState(this.context));
    } catch (error) {
      console.error("Error while reviewing from Submitted state:", error);
    }
  }
}
