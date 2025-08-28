// RevisionReport.ts
import { ProgressReport } from "../abstract/ProgressReport";

export class RevisionReport extends ProgressReport {
  protected fetchData(studentId: string): void {
    if (!studentId) throw new Error("Invalid studentId for RevisionReport");
    console.log(`Fetching revision history for Student ${studentId}`);
  }

  protected generateMetrics(): void {
    console.log("Calculating improvement over time...");
  }
}
