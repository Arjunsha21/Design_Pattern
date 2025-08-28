import { HomeworkHandler } from "./HomeworkHandler";

export class PlagiarismCheckHandler extends HomeworkHandler {
  handle(submission: string): void {
    try {
      if (submission.includes("copied")) {
        console.log("Plagiarism detected");
      } else {
        console.log("Plagiarism check passed");
        this.nextHandler?.handle(submission);
      }
    } catch (error) {
      console.error("Error in PlagiarismCheckHandler:", (error as Error).message);
    }
  }
}
