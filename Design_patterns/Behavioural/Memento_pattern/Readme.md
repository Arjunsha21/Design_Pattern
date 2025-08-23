# Memento Design Pattern in TypeScript

This project demonstrates the Memento Design Pattern using a real-world example: allowing a student to undo their answers in Mindspark by saving and restoring previous states.

---

## What is the Memento Design Pattern?

The Memento Pattern is a behavioral design pattern that allows an object to save and restore its previous state without exposing its internal details. It is useful for implementing undo/redo functionality and preserving object history.

**This is useful when:**
- You want to provide undo/redo capabilities.
- You need to save snapshots of an object's state.
- You want to keep the object's internal state encapsulated.
In Mindspark, students attempt questions. Sometimes, they change their answers and may want to undo their last change.
For example:
A student first answers "42".
Then changes to "50".
Then "56".
If they press Undo, it should go back to "50", and another Undo should take it back to "42".
This is a perfect use case for the Memento Pattern.

---

## 🗂️ Project Structure

```
behavioural/
└── memento_pattern/
    ├── Memento.ts      # Memento pattern implementation for answer history
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `AnswerMemento`      | Stores the state of a student's answer                    |
| `StudentAnswer`      | Originator that creates and restores mementos             |
| `AnswerHistory`      | Caretaker that manages the history of mementos            |

---

## 💡 How It Works

- `StudentAnswer` writes answers and can save its current state as a memento.
- `AnswerMemento` stores the state of an answer.
- `AnswerHistory` keeps a stack of mementos, allowing the student to undo answers by restoring previous states.
- The student can write new answers, save them, and undo changes step-by-step.

---

## ✅ Sample Output

```
Student wrote: Answer 1
Student wrote: Answer 2
Student wrote: Answer 3
Restored to: Answer 2
Restored to: Answer 1
```

---

## ▶️ How to Compile and Run

```sh
tsc Memento.ts
node Memento.js
```

---

## Benefits Demonstrated

- Enables undo functionality by saving and restoring states
- Keeps object state encapsulated
- Simplifies management of object history

---

## Summary

The Memento Pattern is ideal for scenarios where you need to save and restore object states, such as undo/redo features, history tracking,