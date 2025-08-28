import { SpellCheckHandler } from "./handlers/SpellCheckHandler";
import { PlagiarismCheckHandler } from "./handlers/PlagiarismCheckHandler";
import { ContentValidationHandler } from "./handlers/ContentValidationHandler";

// --------- Build the chain ----------
const spellCheck = new SpellCheckHandler();
const plagiarismCheck = new PlagiarismCheckHandler();
const contentCheck = new ContentValidationHandler();

spellCheck.setNext(plagiarismCheck).setNext(contentCheck);

// --------- Test submissions ----------
const submissions = [
  "Photosynthesis explanation is correct",
  "copied content about photosynthesis",
  "mispell in text",
  "random text without keyword"
];

console.log("🔎 Validating submissions:");
submissions.forEach((submission, index) => {
  console.log(`\n Submission ${index + 1}: "${submission}"`);
  try {
    spellCheck.handle(submission);
  } catch (error) {
    console.error("Unexpected error while validating:", (error as Error).message);
  }
});
