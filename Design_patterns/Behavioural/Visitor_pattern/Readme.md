
# Visitor Design Pattern in TypeScript

This project demonstrates the Visitor Design Pattern using a real-world example: performing different operations (evaluation, hint generation) on various types of questions (MCQ, Fill-in-the-Blank, True/False) in an educational app.

---

## What is the Visitor Design Pattern?

The Visitor Pattern is a behavioral design pattern that lets you add further operations to objects without modifying them. It separates algorithms from the objects on which they operate, allowing you to define new operations without changing the classes of the elements.

**This is useful when:**
- You want to perform different operations on objects of different types.
- You want to avoid modifying existing classes to add new behaviors.
- You want to keep operations separate from the object structure.
In Mindspark, we have different types of Questions (MCQ, FillInBlank, True/False).
We want to perform different operations (like evaluate answer, generate hints, log question details) without changing the Question classes.
You can add new operations (like EvaluationVisitor, HintVisitor, DifficultyAnalyzerVisitor, etc.) without touching Question classes.
Helps when you have a stable object structure (types of questions) but want flexible operations.
In Mindspark, this means we can extend functionality (evaluation, hints, difficulty scoring, reports) without rewriting the core Question classes.

---

## 🗂️ Project Structure

```
behavioural/
└── visitor_pattern/
    ├── Visitor.ts      # Visitor pattern implementation for questions
```

---

## 📦 Description of Classes

| Class/Interface         | Role                                                      |
|-------------------------|-----------------------------------------------------------|
| `QuestionVisitor`       | Visitor interface for operations on questions             |
| `Question`              | Element interface for accepting visitors                  |
| `MCQQuestion`           | Concrete element for multiple-choice questions            |
| `FillInBlankQuestion`   | Concrete element for fill-in-the-blank questions          |
| `TrueFalseQuestion`     | Concrete element for true/false questions                 |
| `EvaluationVisitor`     | Visitor for evaluating questions                          |
| `HintVisitor`           | Visitor for generating hints for questions                |

---

## 💡 How It Works

- Each question type (`MCQQuestion`, `FillInBlankQuestion`, `TrueFalseQuestion`) implements the `accept` method to accept a visitor.
- Visitors (`EvaluationVisitor`, `HintVisitor`) implement operations for each question type.
- The client can apply any visitor to a collection of questions, performing different operations without modifying the question classes.

---

## ✅ Sample Output

```
🔎 Evaluating Questions...
Evaluating MCQ: What is 2 + 2? → Correct: 4
Evaluating FillInBlank: The capital of France is ___ → Correct: Paris
Evaluating True/False: Earth is flat → Correct: false

💡 Generating Hints...
Hint for MCQ: Eliminate wrong options to find 4
Hint for FillInBlank: Think about grammar and context.
Hint for True/False: Carefully read the statement.
```

---

## ▶️ How to Compile and Run

```sh
tsc Visitor.ts
node Visitor.js
```

---

## Benefits Demonstrated

- Adds new operations without modifying existing classes
- Keeps operations separate from object structure
- Supports open/closed principle (open for extension, closed for modification)

---

## Summary

The Visitor Pattern is ideal for performing multiple operations on a set of objects with different types, making your codebase flexible, maintainable,