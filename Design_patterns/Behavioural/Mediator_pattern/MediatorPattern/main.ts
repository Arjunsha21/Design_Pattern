import { ChatMediator } from "./mediators/ChatMediator";
import { Teacher } from "./participants/Teacher";
import { Student } from "./participants/Student";

try {
  const chatMediator = new ChatMediator();

  const teacher = new Teacher("Ms. Anitha", chatMediator);
  const student1 = new Student("Arjun", chatMediator);
  const student2 = new Student("Dharma", chatMediator);

  console.log("\n--- Classroom Chat ---");
  teacher.sendMessage("Hello class, today’s topic is Fractions.");
  student1.sendMessage("Got it, ma’am!");
  student2.sendMessage("Yes ma’am, I’m ready!");

  // Error case
  student1.sendMessage(""); // empty message handled safely
} catch (error) {
  console.error("Unexpected error in main:", error);
}
