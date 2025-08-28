# Iterator Design Pattern in TypeScript

This project demonstrates the Iterator Design Pattern using a real-world example: iterating over different types of question collections (arrays, API results, filtered incorrect answers) with a unified interface.

---

## What is the Iterator Design Pattern?

The Iterator Pattern is a behavioral design pattern that provides a way to access the elements of a collection sequentially without exposing its underlying representation. It enables traversing different data structures in a consistent manner.

**This is useful when:**
- You want to traverse collections without exposing their internal structure.
- You want to provide a unified way to iterate over different types of collections.
- You want to support both synchronous and asynchronous iteration.

---

## 🗂️ Project Structure

```
behavioural/
IteratorPattern/
│── interfaces/
│   └── QuestionIterator.ts
│── iterators/
│   ├── ArrayQuestionIterator.ts
│   ├── APIQuestionIterator.ts
│   └── IncorrectAnswerIterator.ts
│── client.ts
│── main.ts
```

---

## 📦 Description of Classes

| Class/Interface           | Role                                                      |
|---------------------------|-----------------------------------------------------------|
| `QuestionIterator`        | Interface for synchronous question iterators              |
| `ArrayQuestionIterator`   | Iterates over questions stored in an array                |
| `APIQuestionIterator`     | Iterates over questions fetched asynchronously (API)      |
| `IncorrectAnswerIterator` | Iterates over questions, filtering out correct answers    |

---

## 💡 How It Works

- `QuestionIterator` defines the interface for iterators over questions.
- `ArrayQuestionIterator` provides sequential access to questions in an array.
- `APIQuestionIterator` simulates asynchronous iteration over questions from an API.
- `IncorrectAnswerIterator` filters and iterates only over incorrect answers.
- The client code uses the same `showQuestions` function to iterate over any collection, regardless of its source or structure.

---

## ✅ Sample Output

```

--- Math Questions ---
Question: 2+2=?
Question: Square root of 16?
Question: 10/2=?

--- Science Questions (from API) ---
Question: What is H2O?
Question: What planet is known as the Red Planet?

--- Incorrect Questions ---
Question: Is sun a planet?
Question: Is Earth flat?
```

---

## ▶️ How to Compile and Run

```sh
tsc Iterator.ts
node Iterator.js
```

---

## Benefits Demonstrated

- Provides a unified way to traverse different collections
- Supports both synchronous and asynchronous iteration
- Simplifies client code by hiding collection details
Without Iterator : 
Each function has its own loop (for loop).
If tomorrow you want to add file-based questions or database questions, you need to write another loop and another function.
The consumer (main) needs to know how data is fetched.
With Iterator : 
You just write one function (showQuestions) that works for all sources.
New sources (Array, API, DB, File, etc.) just implement the next() method.
The consumer (main) doesn’t care about where questions come from.

---

## Summary

The Iterator Pattern is ideal for traversing collections in a consistent and flexible way, regardless of their