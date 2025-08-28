// PracticeReport.ts
import { ProgressReport } from "../abstract/ProgressReport";

export class PracticeReport extends ProgressReport {
  protected fetchData(studentId: string): void {
    if (!studentId) throw new Error("Invalid studentId for PracticeReport");
    console.log(`Fetching practice session data for Student ${studentId}`);
  }

  protected generateMetrics(): void {
    console.log("Calculating accuracy, attempts, and hints used...");
  }
}
