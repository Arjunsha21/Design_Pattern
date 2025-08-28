# Chain of Responsibility Design Pattern in TypeScript

This project demonstrates the Chain of Responsibility Design Pattern using a real-world example: processing homework submissions through a series of handlers (plagiarism check, format check, teacher review).

---

## What is the Chain of Responsibility Design Pattern?

The Chain of Responsibility Pattern is a behavioral design pattern that allows a request to pass through a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain. This decouples the sender of a request from its receivers.

**This is useful when:**
- You want to process requests by multiple handlers in a specific order.
- You want to decouple request senders from receivers.
- You want to add or remove handlers dynamically without changing client code.
Context: In Mindspark, some questions allow short answer keywords, e.g.,
"Photosynthesis produces oxygen"
"Water cycle includes evaporation"
We want to interpret student answers to check if they contain required keywords using the Interpreter pattern.
Flexible Rules – You can create complex evaluation rules (AndExpression, OrExpression) without hardcoding every combination.
Extensible – Add new operations like NotExpression or ContainsSynonymExpression without changing question classes.
Mindspark Context – Ideal for short answer questions, keyword-based evaluation, or custom grading rules.
---

## 🗂️ Project Structure

```
InterpreterPattern/
│── Expression.ts
│── KeywordExpression.ts
│── AndExpression.ts
│── OrExpression.ts
│── main.ts

```

---

## 📦 Description of Classes

| Class/Interface           | Role                                                      |
|---------------------------|-----------------------------------------------------------|
| `Handler`                 | Interface for handling requests and setting next handler   |
| `PlagiarismHandler`       | Checks for plagiarism in homework                         |
| `FormatHandler`           | Checks formatting of homework                             |
| `TeacherReviewHandler`    | Reviews homework as a teacher                             |

---

## 💡 How It Works

- Each handler implements the `handle` method and can pass the request to the next handler.
- The client sets up a chain of handlers (e.g., plagiarism → format → review).
- A homework submission passes through the chain, and each handler processes or forwards the request.

---

## ✅ Sample Output

```
Answer 1: Q1: ✅, Q2: ❌
Answer 2: Q1: ❌, Q2: ✅
Answer 3: Q1: ❌, Q2: ❌
```

---

## ▶️ How to Compile and Run

```sh
tsc ChainofResponsibility.ts
node ChainofResponsibility.js
```

---

## Benefits Demonstrated

- Decouples sender and receiver of requests
- Supports flexible and dynamic handler chains
- Makes it easy to add, remove, or reorder handlers

---

## Summary

The Chain of Responsibility Pattern is ideal for scenarios where a request must be processed by multiple handlers in sequence, promoting flexibility