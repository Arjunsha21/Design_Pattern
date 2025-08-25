// Observer interface
interface Observer {
  update(message: string): void;
}

// Concrete Observer: Student
class Student implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} received notification: ${message}`);
  }
}

// Subject interface
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(message: string): void;
}

// Concrete Subject: Teacher
class Teacher implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }

  // Teacher posts announcement
  postAnnouncement(announcement: string) {
    console.log(`Teacher posted: "${announcement}"`);
    this.notifyObservers(announcement);
  }
}

// ----------- Usage -----------

const teacher = new Teacher();

const student1 = new Student("Arjun");
const student2 = new Student("Ajay");
const student3 = new Student("Harish");

// Students subscribe to teacher
teacher.addObserver(student1);
teacher.addObserver(student2);
teacher.addObserver(student3);

teacher.postAnnouncement("New homework on Fractions is available!");
// Teacher posted: "New homework on Fractions is available!"
// Arjun received notification: New homework on Fractions is available!
// Ajay received notification: New homework on Fractions is available!
// Harish received notification: New homework on Fractions is available!

// One student unsubscribes
teacher.removeObserver(student2);

teacher.postAnnouncement("Submit your homework before Friday!");
// Teacher posted: "Submit your homework before Friday!"
// Arjun received notification: Submit your homework before Friday!
// Harish received notification: Submit your homework before Friday!

//Without Observer Pattern
// class Student {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   receiveNotification(message: string): void {
//     console.log(`${this.name} received notification: ${message}`);
//   }
// }

// class Teacher {
//   private student1: Student;
//   private student2: Student;
//   private student3: Student;

//   constructor(student1: Student, student2: Student, student3: Student) {
//     this.student1 = student1;
//     this.student2 = student2;
//     this.student3 = student3;
//   }

//   postAnnouncement(announcement: string) {
//     console.log(`Teacher posted: "${announcement}"`);

//     // Teacher must call each student explicitly
//     this.student1.receiveNotification(announcement);
//     this.student2.receiveNotification(announcement);
//     this.student3.receiveNotification(announcement);
//   }
// }

// // ----------- Usage -----------

// const student1 = new Student("Arjun");
// const student2 = new Student("Ajay");
// const student3 = new Student("Harish");

// const teacher = new Teacher(student1, student2, student3);

// teacher.postAnnouncement("New homework on Fractions is available!");
// // Teacher posted: "New homework on Fractions is available!"
// //  Arjun received notification: New homework on Fractions is available!
// //  Ajay received notification: New homework on Fractions is available!
// //  Harish received notification: New homework on Fractions is available!
