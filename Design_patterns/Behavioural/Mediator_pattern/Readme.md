# Mediator Design Pattern in TypeScript

This project demonstrates the Mediator Design Pattern using a real-world example: a classroom chat system where a mediator coordinates communication between teachers and students.

---

## What is the Mediator Design Pattern?

The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) to encapsulate how a set of objects interact. It promotes loose coupling by preventing objects from referring to each other directly, and lets you vary their interaction independently.

**This is useful when:**
- You want to reduce direct dependencies between communicating objects.
- You want to centralize complex communication logic.
- You want to simplify and organize interactions in a system with many objects.
A chat system between Teacher and Students. Instead of students talking directly to each other (tight coupling), they communicate via a Mediator (like the platform).
Without Mediator: Each student/teacher would need references to all others → messy, hard to scale.
With Mediator: Teacher and students only know the mediator (chat system). Adding/removing participants becomes very easy.
👉 In Mindspark context, Mediator could represent:
Chat between teacher and students
Coordinating multiple components (quiz engine, leaderboard, notifications) without them knowing each other directly.


---

## 🗂️ Project Structure

```
behavioural/
MediatorPattern/
│── interfaces/
│   └── Mediator.ts
│── participants/
│   ├── Participant.ts
│   ├── Teacher.ts
│   └── Student.ts
│── mediators/
│   └── ChatMediator.ts
│── main.ts

```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `Mediator`           | Interface for sending messages and managing participants  |
| `ChatMediator`       | Concrete mediator that coordinates message delivery       |
| `Participant`        | Abstract class for chat participants (teacher/student)    |
| `Teacher`            | Concrete participant representing a teacher               |
| `Student`            | Concrete participant representing a student               |

---

## 💡 How It Works

- `ChatMediator` maintains a list of participants and delivers messages to all except the sender.
- `Teacher` and `Student` extend `Participant` and implement message receiving behavior.
- Participants send messages via the mediator, which handles delivery and decouples participants from each other.

---

## ✅ Sample Output

```

--- Classroom Chat ---
Ms. Anitha sends: Hello class, today’s topic is Fractions.
Student Arjun received: Hello class, today’s topic is Fractions.
Student Dharma received: Hello class, today’s topic is Fractions.
Arjun sends: Got it, ma’am!
Teacher Ms. Anitha received: Got it, ma’am!
Student Dharma received: Got it, ma’am!
Dharma sends: Yes ma’am, I’m ready!
Teacher Ms. Anitha received: Yes ma’am, I’m ready!
Student Arjun received: Yes ma’am, I’m ready!
Arjun tried to send an empty message.
```

---

## ▶️ How to Compile and Run

```sh
tsc Mediator.ts
node Mediator.js
```

---

## Benefits Demonstrated

- Reduces coupling between objects
- Centralizes communication logic
- Makes it easy to add or remove participants
- Simplifies maintenance and extension of communication rules

---

## Summary

The Mediator Pattern is ideal for managing complex communications and dependencies between objects, making your system more modular, maintainable, and