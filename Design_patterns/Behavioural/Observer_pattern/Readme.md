# Observer Design Pattern in TypeScript

This project demonstrates the Observer Design Pattern using a real-world example: a teacher posting announcements and students receiving notifications automatically.

---

## What is the Observer Design Pattern?

The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects. When the state of one object (the subject) changes, all its dependents (observers) are notified and updated automatically.

**This is useful when:**
- You want to notify multiple objects about changes in another object.
- You want to decouple the subject from its observers.
- You want to implement event-driven systems or publish/subscribe mechanisms.
When a teacher posts a new announcement/homework, all subscribed students should automatically get notified.

That’s exactly what the Observer Pattern does: One-to-Many notification.
The Teacher doesn’t care who the students are → only calls notifyObservers().
Students can subscribe/unsubscribe anytime.
Easy to extend: we can add ParentObserver, AdminObserver, etc. without touching the Teacher class.

---

## 🗂️ Project Structure

```
behavioural/
└── observer_pattern/
    ├── Observer.ts      # Observer pattern implementation for notifications
```

---

## 📦 Description of Classes

| Class/Interface      | Role                                                      |
|----------------------|-----------------------------------------------------------|
| `Observer`           | Interface for observers (students)                        |
| `Student`            | Concrete observer that receives notifications             |
| `Subject`            | Interface for subjects (teacher)                          |
| `Teacher`            | Concrete subject that manages observers and announcements |

---

## 💡 How It Works

- `Teacher` (subject) maintains a list of observers (students).
- Students subscribe or unsubscribe to the teacher's notifications.
- When the teacher posts an announcement, all subscribed students receive the notification via their `update` method.
- The teacher can add or remove observers at any time.

---

## ✅ Sample Output

```
👩‍🏫 Teacher posted: "New homework on Fractions is available!"
📩 Arjun received notification: New homework on Fractions is available!
📩 Ajay received notification: New homework on Fractions is available!
📩 Harish received notification: New homework on Fractions is available!

👩‍🏫 Teacher posted: "Submit your homework before Friday!"
📩 Arjun received notification: Submit your homework before Friday!
📩 Harish received notification: Submit your homework before Friday!
```

---

## ▶️ How to Compile and Run

```sh
tsc Observer.ts
node Observer.js
```

---

## Benefits Demonstrated

- Decouples subject and observers
- Supports dynamic subscription and unsubscription
- Enables event-driven communication

---

## Summary

The Observer Pattern is ideal for scenarios where multiple objects need to be notified about changes in another object, such as notifications, event handling,