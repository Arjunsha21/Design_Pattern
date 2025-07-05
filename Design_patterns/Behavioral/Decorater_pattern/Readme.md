# Decorator Design Pattern in TypeScript

This project demonstrates the Decorator Design Pattern using a real-world example: dynamically adding features (milk, sugar, cream) to a coffee order.

---

## What is the Decorator Design Pattern?

The Decorator Pattern is a structural design pattern that allows you to add new functionality to objects dynamically by wrapping them in decorator classes. It provides a flexible alternative to subclassing for extending behavior.

**This is useful when:**
- You want to add responsibilities to individual objects, not to an entire class.
- You want to add features dynamically and transparently, without affecting other objects.
- You want to avoid class explosion from many feature combinations.

---

## 🗂️ Project Structure

```
behavioral/
└── decorater_pattern/
    ├── Decorater.ts      # Decorator pattern implementation for coffee
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `Coffee`             | Interface defining the common behavior (`cost`, `description`) |
| `SimpleCoffee`       | Concrete component representing plain coffee              |
| `CoffeeDecorator`    | Abstract decorator base class                             |
| `MilkDecorator`      | Adds milk to the coffee                                   |
| `SugarDecorator`     | Adds sugar to the coffee                                  |
| `CreamDecorator`     | Adds cream to the coffee                                  |

---

## 💡 How It Works

- `SimpleCoffee` implements the base coffee.
- Decorators (`MilkDecorator`, `SugarDecorator`, `CreamDecorator`) wrap a `Coffee` object and add their own behavior.
- You can wrap a coffee object with any combination of decorators to build up the desired features.
- The client can add features dynamically at runtime without modifying existing code.

---

## ✅ Sample Output

```
Simple Coffee → ₹50
Simple Coffee, Milk → ₹60
Simple Coffee, Milk, Sugar → ₹65
Simple Coffee, Milk, Sugar, Cream → ₹80
```

---

## ▶️ How to Compile and Run

```sh
tsc Decorater.ts
node Decorater.js
```

---

## Benefits Demonstrated

- Dynamically adds features to objects without subclassing
- Avoids class explosion for every feature combination
- Promotes open/closed principle (open for extension, closed for modification)

---

## Summary

The Decorator Pattern is ideal for adding features to objects dynamically and flexibly, keeping your codebase maintainable and