// ChallengeReport.ts
import { ProgressReport } from "../abstract/ProgressReport";

export class ChallengeReport extends ProgressReport {
  protected fetchData(studentId: string): void {
    if (!studentId) throw new Error("Invalid studentId for ChallengeReport");
    console.log(`Fetching challenge performance for Student ${studentId}`);
  }

  protected generateMetrics(): void {
    console.log("Calculating speed, rank, and difficulty level...");
  }
}
