import { HomeworkHandler } from "./HomeworkHandler";

export class ContentValidationHandler extends HomeworkHandler {
  handle(submission: string): void {
    try {
      if (!submission.includes("photosynthesis")) {
        console.log("Content validation failed");
      } else {
        console.log("Content validation passed");
      }
    } catch (error) {
      console.error("Error in ContentValidationHandler:", (error as Error).message);
    }
  }
}
