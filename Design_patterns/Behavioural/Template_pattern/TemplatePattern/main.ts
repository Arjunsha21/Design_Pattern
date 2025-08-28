// main.ts
import { PracticeReport } from "./concrete/PracticeReport";
import { ChallengeReport } from "./concrete/ChallengeReport";
import { RevisionReport } from "./concrete/RevisionReport";

const practice = new PracticeReport();
practice.generateReport("STU101");

const challenge = new ChallengeReport();
challenge.generateReport("STU102");

const revision = new RevisionReport();
revision.generateReport("STU103");

// ❌ Example with error
const badPractice = new PracticeReport();
badPractice.generateReport(""); // Error handled
