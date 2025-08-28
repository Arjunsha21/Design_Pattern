import { HomeworkHandler } from "./HomeworkHandler";

export class SpellCheckHandler extends HomeworkHandler {
  handle(submission: string): void {
    try {
      if (submission.includes("mispell")) {
        console.log(" SpellCheck failed");
      } else {
        console.log("SpellCheck passed");
        this.nextHandler?.handle(submission);
      }
    } catch (error) {
      console.error("Error in SpellCheckHandler:", (error as Error).message);
    }
  }
}
