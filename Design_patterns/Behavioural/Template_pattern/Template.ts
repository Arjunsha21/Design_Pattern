// 1. Abstract Template
abstract class ProgressReport {
  // Template Method
  generateReport(studentId: string): void {
    this.fetchData(studentId);
    this.generateMetrics();
    this.formatReport();
    this.sendReport(studentId);
  }

  protected abstract fetchData(studentId: string): void;
  protected abstract generateMetrics(): void;

  protected formatReport(): void {
    console.log(" Formatting report in Mindspark standard template...");
  }

  protected sendReport(studentId: string): void {
    console.log(` Sending report to Student ID: ${studentId}`);
  }
}

// 2. Concrete Implementations
class PracticeReport extends ProgressReport {
  protected fetchData(studentId: string): void {
    console.log(` Fetching practice session data for Student ${studentId}`);
  }

  protected generateMetrics(): void {
    console.log(" Calculating accuracy, attempts, and hints used...");
  }
}

class ChallengeReport extends ProgressReport {
  protected fetchData(studentId: string): void {
    console.log(` Fetching challenge performance for Student ${studentId}`);
  }

  protected generateMetrics(): void {
    console.log(" Calculating speed, rank, and difficulty level...");
  }
}

class RevisionReport extends ProgressReport {
  protected fetchData(studentId: string): void {
    console.log(` Fetching revision history for Student ${studentId}`);
  }

  protected generateMetrics(): void {
    console.log(" Calculating improvement over time...");
  }
}

// 3. Usage
const practice = new PracticeReport();
practice.generateReport("STU101");

const challenge = new ChallengeReport();
challenge.generateReport("STU102");

const revision = new RevisionReport();
revision.generateReport("STU103");

// Without Template Pattern 
// class PracticeReport {
//   generateReport(studentId: string): void {
//     console.log(` Fetching practice session data for Student ${studentId}`);
//     console.log(" Calculating accuracy, attempts, and hints used...");
//     console.log(" Formatting report in Mindspark standard template...");
//     console.log(` Sending report to Student ID: ${studentId}`);
//   }
// }

// class ChallengeReport {
//   generateReport(studentId: string): void {
//     console.log(` Fetching challenge performance for Student ${studentId}`);
//     console.log(" Calculating speed, rank, and difficulty level...");
//     console.log(" Formatting report in Mindspark standard template...");
//     console.log(` Sending report to Student ID: ${studentId}`);
//   }
// }

// class RevisionReport {
//   generateReport(studentId: string): void {
//     console.log(` Fetching revision history for Student ${studentId}`);
//     console.log(" Calculating improvement over time...");
//     console.log(" Formatting report in Mindspark standard template...");
//     console.log(` Sending report to Student ID: ${studentId}`);
//   }
// }

// // Usage
// const practice = new PracticeReport();
// practice.generateReport("STU101");

// const challenge = new ChallengeReport();
// challenge.generateReport("STU102");

// const revision = new RevisionReport();
// revision.generateReport("STU103");