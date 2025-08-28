// index.ts
import { Teacher } from "./Teacher";
import { Student } from "./Student";

const teacher = new Teacher();

const student1 = new Student("Arjun");
const student2 = new Student("Ajay");
const student3 = new Student("Harish");

// Students subscribe
teacher.addObserver(student1);
teacher.addObserver(student2);
teacher.addObserver(student3);

teacher.postAnnouncement("New homework on Fractions is available!");

// Unsubscribe Ajay
teacher.removeObserver(student2);

teacher.postAnnouncement("Submit your homework before Friday!");
