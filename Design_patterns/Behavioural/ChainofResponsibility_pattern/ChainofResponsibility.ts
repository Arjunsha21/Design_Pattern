// --------- Handler Interface ----------
abstract class HomeworkHandler {
  protected nextHandler: HomeworkHandler | null = null;

  setNext(handler: HomeworkHandler): HomeworkHandler {
    this.nextHandler = handler;
    return handler;
  }

  abstract handle(submission: string): void;
}

// --------- Concrete Handlers ----------
class SpellCheckHandler extends HomeworkHandler {
  handle(submission: string): void {
    if (submission.includes("mispell")) {
      console.log("❌ SpellCheck failed");
    } else {
      console.log("✅ SpellCheck passed");
      this.nextHandler?.handle(submission);
    }
  }
}

class PlagiarismCheckHandler extends HomeworkHandler {
  handle(submission: string): void {
    if (submission.includes("copied")) {
      console.log("❌ Plagiarism detected");
    } else {
      console.log("✅ Plagiarism check passed");
      this.nextHandler?.handle(submission);
    }
  }
}

class ContentValidationHandler extends HomeworkHandler {
  handle(submission: string): void {
    if (!submission.includes("photosynthesis")) {
      console.log("❌ Content validation failed");
    } else {
      console.log("✅ Content validation passed");
    }
  }
}

// --------- Usage in Mindspark ----------
const spellCheck = new SpellCheckHandler();
const plagiarismCheck = new PlagiarismCheckHandler();
const contentCheck = new ContentValidationHandler();

// Build the chain
spellCheck.setNext(plagiarismCheck).setNext(contentCheck);

// Test submissions
const submissions = [
  "Photosynthesis explanation is correct",
  "copied content about photosynthesis",
  "mispell in text",
];

console.log("🔎 Validating submissions:");
submissions.forEach((submission, index) => {
  console.log(`\nSubmission ${index + 1}: "${submission}"`);
  spellCheck.handle(submission);
});

// // Simple homework validation without CoR

// function validateHomework(submission: string): void {
//   // Spell Check
//   if (submission.includes("mispell")) {
//     console.log("❌ SpellCheck failed");
//     return; // stop further validation
//   } else {
//     console.log("✅ SpellCheck passed");
//   }

//   // Plagiarism Check
//   if (submission.includes("copied")) {
//     console.log("❌ Plagiarism detected");
//     return;
//   } else {
//     console.log("✅ Plagiarism check passed");
//   }

//   // Content Validation
//   if (!submission.includes("photosynthesis")) {
//     console.log("❌ Content validation failed");
//   } else {
//     console.log("✅ Content validation passed");
//   }
// }

// // Test submissions
// const submissions = [
//   "Photosynthesis explanation is correct",
//   "copied content about photosynthesis",
//   "mispell in text",
// ];

// console.log("🔎 Validating submissions:");
// submissions.forEach((submission, index) => {
//   console.log(`\nSubmission ${index + 1}: "${submission}"`);
//   validateHomework(submission);
// });
