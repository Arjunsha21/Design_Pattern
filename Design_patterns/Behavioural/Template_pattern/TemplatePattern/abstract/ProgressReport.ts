// ProgressReport.ts
export abstract class ProgressReport {
    // Template Method (fixed structure of algorithm)
    generateReport(studentId: string): void {
      try {
        this.fetchData(studentId);
        this.generateMetrics();
        this.formatReport();
        this.sendReport(studentId);
      } catch (error: any) {
        console.error(`Error generating report for ${studentId}:`, error.message);
      }
    }
  
    // Steps to be implemented by subclasses
    protected abstract fetchData(studentId: string): void;
    protected abstract generateMetrics(): void;
  
    // Common steps (shared across all reports)
    protected formatReport(): void {
      console.log("Formatting report in Mindspark standard template...");
    }
  
    protected sendReport(studentId: string): void {
      console.log(`Sending report to Student ID: ${studentId}`);
    }
  }
  