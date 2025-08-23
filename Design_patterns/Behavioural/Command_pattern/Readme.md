# Command Design Pattern in TypeScript

This project demonstrates the Command Design Pattern using a real-world example: executing and undoing actions (like submitting homework, updating answers, or deleting submissions) in an educational app.

---

## What is the Command Design Pattern?

The Command Pattern is a behavioral design pattern that encapsulates a request as an object, allowing you to parameterize clients with different requests, queue or log requests, and support undoable operations.

**This is useful when:**
- You want to decouple the sender of a request from its receiver.
- You want to support undo/redo functionality.
- You want to queue, log, or schedule requests.
- You want to parameterize objects with operations.
Student Actions in an Interactive Exercise
Context: In Mindspark, a student performs actions like:
SelectOption
SubmitAnswer
HighlightText
We want to record these actions, and allow undo/redo.
Decouples the action from the invoker – The invoker doesn’t need to know the details of the student action.
Supports undo/redo – Every action is stored in a history stack.
Mindspark context – Perfect for recording student interactions, replaying actions, or batch processing multiple commands

---

## 🗂️ Project Structure

```
behavioural/
└── command_pattern/
    ├── Command.ts      # Command pattern implementation for homework actions
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `Command`            | Interface for executing and undoing actions               |
| `SubmitHomeworkCommand` | Command to submit homework                             |
| `UpdateAnswerCommand`   | Command to update an answer                            |
| `DeleteSubmissionCommand`| Command to delete a submission                        |
| `Invoker`            | Stores and executes commands                              |
| `Receiver`           | Performs the actual operations                            |

---

## 💡 How It Works

- Each command implements the `execute` and `undo` methods.
- The `Invoker` stores commands and can execute or undo them.
- The `Receiver` performs the actual business logic.
- The client creates command objects and passes them to the invoker for execution.

---

## ✅ Sample Output

```
Homework submitted!
Answer updated!
Submission deleted!
Undo: Submission restored!
Undo: Answer reverted!
Undo: Homework submission cancelled!
```

---

## ▶️ How to Compile and Run

```sh
tsc Command.ts
node Command.js
```

---

## Benefits Demonstrated

- Decouples request sender and receiver
- Supports undo/redo operations
- Enables logging and queuing of requests
- Makes it easy to add new commands

---

## Summary

The Command Pattern is ideal for scenarios where you need to encapsulate requests, support undo/redo, and decouple the sender from the receiver, making your codebase flexible and