# State Design Pattern in TypeScript

This project demonstrates the State Design Pattern using a real-world example: managing the states of a homework submission in Mindspark (Draft, Submitted, Reviewed), where each state defines its own behavior for actions like `submit()` and `review()`.

---

## What is the State Design Pattern?

The State Pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. The object will appear to change its class. Each state is represented by a separate class that encapsulates state-specific behavior.

**This is useful when:**
- You want to avoid large conditional statements (if/else or switch) for state-dependent logic.
- You want to encapsulate state-specific behavior and transitions.
- You want to make it easy to add new states without modifying existing code.
In Mindspark, a homework submission can be in different states:
Draft → student is still editing
Submitted → student has submitted
Reviewed → teacher has checked and given feedback
Each state should define its own behavior for actions like submit(), review(), etc.
Encapsulates state-specific behavior
Draft, Submitted, Reviewed have different rules.
Without state pattern, you’d write a giant if/else everywhere.
Easier to extend
If Mindspark later adds a new state like "Resubmitted" → just add another class, no need to rewrite everything.
Context doesn’t need to know the rules
Homework only delegates actions to the current state.
It doesn’t care how each state behaves.

---

## 🗂️ Project Structure

```
behavioural/
└── state_pattern/
    ├── State.ts      # State pattern implementation for homework submission
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `HomeworkState`      | Interface for state-specific actions (`submit`, `review`) |
| `DraftState`         | State when homework is being edited                       |
| `SubmittedState`     | State when homework is submitted for review               |
| `ReviewedState`      | State when homework is reviewed by teacher                |
| `Homework`           | Context that delegates actions to the current state       |

---

## 💡 How It Works

- `HomeworkState` defines the interface for actions (`submit`, `review`).
- Concrete states (`DraftState`, `SubmittedState`, `ReviewedState`) implement state-specific behavior.
- `Homework` (context) holds a reference to the current state and delegates actions to it.
- State transitions are handled by changing the current state object.

---

## ✅ Sample Output

```
❌ Homework is still in Draft. Cannot review.
✅ Homework submitted for review.
❌ Homework already submitted. Cannot submit again.
👩‍🏫 Teacher reviewed the homework.
❌ Homework already reviewed.
```

---

## ▶️ How to Compile and Run

```sh
tsc State.ts
node State.js
```

---

## Benefits Demonstrated

- Encapsulates state-specific behavior and transitions
- Eliminates complex conditional logic
- Makes it easy to add new states (e.g., "Resubmitted") by adding new classes
- Context delegates actions to the current state, keeping logic clean and maintainable

---

## Summary

The State Pattern is ideal for managing objects that change behavior based on their internal state, making your code more maintainable, extensible, and easier to
