# Bridge Design Pattern in TypeScript

This project demonstrates the Bridge Design Pattern using a real-world example: decoupling payment methods (UPI, Card) from payment platforms (Web, Mobile) to avoid class explosion and increase flexibility.

---

## What is the Bridge Design Pattern?

The Bridge Pattern is a structural design pattern that separates an abstraction from its implementation so that the two can vary independently. It is useful when you want to avoid a combinatorial explosion of classes due to multiple dimensions of variation.

**This is useful when:**
- You have multiple orthogonal (independent) dimensions of variation (e.g., payment method and platform).
- You want to avoid creating a separate class for every combination.
- You want to change or extend either abstraction or implementation independently.

---

## 🗂️ Project Structure

```
behavioral/
└── bridge_pattern/
    ├── Bridge.ts      # Bridge pattern implementation for payments
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `PaymentMethod`      | Interface for payment methods (Implementor)               |
| `UPIPayment`         | Concrete payment method (UPI)                             |
| `CardPayment`        | Concrete payment method (Credit Card)                     |
| `PaymentPlatform`    | Abstraction for payment platforms                         |
| `WebPlatform`        | Concrete platform for web payments                        |
| `MobilePlatform`     | Concrete platform for mobile payments                     |

---

## 💡 How It Works

- `PaymentMethod` defines the interface for payment methods.
- `UPIPayment` and `CardPayment` implement different payment methods.
- `PaymentPlatform` is the abstraction that uses a `PaymentMethod`.
- `WebPlatform` and `MobilePlatform` extend `PaymentPlatform` to represent different platforms.
- The client can mix and match any payment method with any platform without creating new classes for each combination.

---

## ✅ Sample Output

```
🌐 Web Payment Started
✅ Paid ₹1000 via UPI
📱 Mobile Payment Started
✅ Paid ₹2000 using Credit Card
🌐 Web Payment Started
✅ Paid ₹1500 using Credit Card
📱 Mobile Payment Started
✅ Paid ₹800 via UPI
```

---

## ▶️ How to Compile and Run

```sh
tsc Bridge.ts
node Bridge.js
```

---

## Benefits Demonstrated

- Decouples abstraction (platform) from implementation (payment method)
- Avoids class explosion for every combination
- Makes it easy to add new platforms or payment methods independently

---

## Summary

The Bridge Pattern is ideal for scenarios where you have multiple independent dimensions of variation. It keeps your codebase flexible, maintainable, and scalable