// Homework.ts
import { HomeworkState } from "./HomeworkState";
import { DraftState } from "./DraftState";

export class Homework {
  private state: HomeworkState;

  constructor() {
    this.state = new DraftState(this); // Initial state is Draft
  }

  setState(state: HomeworkState) {
    if (!state) {
      throw new Error("Invalid state transition.");
    }
    this.state = state;
  }

  submit() {
    try {
      this.state.submit();
    } catch (error) {
      console.error("Error during submit:", error);
    }
  }

  review() {
    try {
      this.state.review();
    } catch (error) {
      console.error("Error during review:", error);
    }
  }
}
