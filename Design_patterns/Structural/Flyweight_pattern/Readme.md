# Flyweight Design Pattern in TypeScript

This project demonstrates the Flyweight Design Pattern using a real-world example: rendering styled characters efficiently by sharing style objects.

---

## What is the Flyweight Design Pattern?

The Flyweight Pattern is a structural design pattern that enables efficient memory usage by sharing as much data as possible with similar objects. It separates intrinsic (shared) state from extrinsic (unique) state, allowing many objects to share common data.

**This is useful when:**
- You need to create a large number of similar objects.
- Most object data can be shared to reduce memory usage.
- You want to optimize performance and resource consumption in applications like text editors, graphics, or games.

---

## 🗂️ Project Structure

```
behavioral/
└── flyweight_pattern/
    ├── Flyweight.ts      # Flyweight pattern implementation for styled characters
```

---

## 📦 Description of Classes

| Class             | Role                                                                 |
|-------------------|----------------------------------------------------------------------|
| `CharacterStyle`  | Stores shared font and style information (the flyweight)             |
| `StyleFactory`    | Manages and reuses `CharacterStyle` instances                        |
| `StyledCharacter` | Represents a character with position and a reference to a style      |

---

## 💡 How It Works

- `CharacterStyle` holds shared style data (font, size, bold).
- `StyleFactory` creates and manages unique `CharacterStyle` objects, ensuring styles are reused.
- `StyledCharacter` represents a character at a position, referencing a shared style.
- The client creates many `StyledCharacter` objects, but only a few `CharacterStyle` objects are created and reused.

---

## ✅ Sample Output

```
Rendering 'H' at (0, 0) with style: font=Arial, size=12, bold=false
Rendering 'e' at (10, 0) with style: font=Arial, size=12, bold=false
Rendering 'l' at (20, 0) with style: font=Arial, size=12, bold=false
Rendering 'l' at (30, 0) with style: font=Arial, size=12, bold=false
Rendering 'o' at (40, 0) with style: font=Arial, size=12, bold=false
```

---

## ▶️ How to Compile and Run

```sh
tsc Flyweight.ts --target es2015
node Flyweight.js
```

---

## Benefits Demonstrated

- Reduces memory usage by sharing style objects
- Efficiently handles large numbers of similar objects
- Separates shared (intrinsic) and unique (extrinsic) state

---

## Summary

The Flyweight Pattern is ideal for applications that need to efficiently manage large numbers of similar objects by sharing common data, resulting in significant memory and performance optimizations.