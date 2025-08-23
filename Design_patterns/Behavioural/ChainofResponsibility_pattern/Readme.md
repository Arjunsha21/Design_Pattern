
## What is the Interpreter Design Pattern?

The Interpreter Pattern is a behavioral design pattern that defines a way to evaluate language grammar or expressions. It provides a way to interpret sentences in a language by building an abstract syntax tree and evaluating it.

**This is useful when:**
- You need to implement a language or grammar (e.g., math expressions, custom rules).
- You want to parse and evaluate expressions at runtime.
- You want to make your system extensible for new grammar rules.
Context: In Mindspark, every homework submission must pass through several validations:# Interpreter Design Pattern in TypeScript
This project demonstrates the Interpreter Design Pattern using a real-world example: evaluating simple mathematical expressions and custom rules for homework grading.
Decouples validations – Each validation step is a separate class.
Flexible order – You can reorder or skip validations easily.
Mindspark context – Perfect for pipeline-like workflows such as homework submission, quiz grading, or content moderation.
Easily extendable – Add new checks like GrammarCheck or ReferenceCheck without touching existing code.

---

## 🗂️ Project Structure

```
behavioural/
└── interpreter_pattern/
    ├── Interpreter.ts      # Interpreter pattern implementation for expressions
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `Expression`         | Interface for interpreting expressions                    |
| `NumberExpression`   | Represents a numeric value                                |
| `AddExpression`      | Represents addition operation                             |
| `SubtractExpression` | Represents subtraction operation                          |
| `MultiplyExpression` | Represents multiplication operation                       |
| `DivideExpression`   | Represents division operation                             |
| `Context`            | Holds variables and their values                          |

---

## 💡 How It Works

- Each expression class implements the `interpret` method.
- Complex expressions are built by combining simple expressions (e.g., addition, multiplication).
- The client builds an expression tree and evaluates it using the context.

---

## ✅ Sample Output

```
Expression: (5 + 3) * 2
Result: 16

Expression: (10 - 4) / 2
Result: 3
```

---

## ▶️ How to Compile and Run

```sh
tsc Interpreter.ts
node Interpreter.js
```

---

## Benefits Demonstrated

- Parses and evaluates expressions dynamically
- Supports extensible grammar rules
- Decouples expression logic from evaluation

---

## Summary

The Interpreter Pattern is ideal for scenarios where you need to interpret and evaluate expressions or grammar, such as calculators, rule engines,
SpellCheck – ensure the text is free of spelling mistakes.
PlagiarismCheck – ensure originality.
ContentValidation – check for required keywords or completeness.