# Strategy Design Pattern in TypeScript

This project demonstrates the Strategy Design Pattern using a real-world example: evaluating different types of homework submissions (text, image, MCQ) with interchangeable evaluation strategies.

---

## What is the Strategy Design Pattern?

The Strategy Pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client can choose which strategy to use without changing the code that uses it.

**This is useful when:**
- You want to switch between different algorithms or behaviors dynamically.
- You want to avoid conditional statements for selecting behavior.
- You want to follow the open/closed principle (open for extension, closed for modification).

---

## 🗂️ Project Structure

```
behavioural/
└── strategy_pattern/
    ├── Strategy.ts      # Strategy pattern implementation for homework evaluation
```

---

## 📦 Description of Classes

| Class/Interface            | Role                                                      |
|----------------------------|-----------------------------------------------------------|
| `EvaluationStrategy`       | Interface for evaluation strategies                       |
| `TextEvaluationStrategy`   | Concrete strategy for text answers                        |
| `ImageEvaluationStrategy`  | Concrete strategy for image answers                       |
| `MCQEvaluationStrategy`    | Concrete strategy for multiple-choice answers             |
| `HomeworkEvaluator`        | Context that uses an evaluation strategy                  |

---

## 💡 How It Works

- `EvaluationStrategy` defines the interface for evaluation algorithms.
- Concrete strategies (`TextEvaluationStrategy`, `ImageEvaluationStrategy`, `MCQEvaluationStrategy`) implement different evaluation methods.
- `HomeworkEvaluator` holds a reference to an `EvaluationStrategy` and delegates evaluation to it.
- The client can change the evaluation strategy at runtime to select the desired evaluation method.

---

## ✅ Sample Output

```
Text Answer is Correct ✅
Image is blurry ❌, please re-upload
MCQ Answer is Incorrect ❌
```

---

## ▶️ How to Compile and Run

```sh
tsc Strategy.ts
node Strategy.js
```

---

## Benefits Demonstrated

- Allows dynamic selection of algorithms at runtime
- Eliminates complex conditional logic
- Promotes code reuse and flexibility

---

## Summary

The Strategy Pattern is ideal for situations where you need to choose between multiple algorithms or behaviors at runtime, keeping your