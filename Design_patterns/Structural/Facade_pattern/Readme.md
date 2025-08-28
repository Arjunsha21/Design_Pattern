# Facade Design Pattern in TypeScript

This project demonstrates the Facade Design Pattern using a real-world example: simplifying a banking system where multiple subsystems (authentication, account management, notifications, and logging) are coordinated through a single interface.

---

## What is the Facade Design Pattern?

The Facade Pattern is a structural design pattern that provides a simplified, unified interface to a set of interfaces in a subsystem. It hides the complexities of the subsystem and makes it easier for clients to interact with the system.

**This is useful when:**
- You want to provide a simple interface to a complex subsystem.
- You want to decouple client code from the internal workings of a system.
- You want to organize code and reduce dependencies between subsystems.

---

## 🗂️ Project Structure

```
facade-pattern/
│── interfaces/
│   ├── IAuthService.ts
│   ├── IAccountService.ts
│   ├── INotificationService.ts
│   ├── ITransactionLogger.ts
│
│── services/
│   ├── AuthService.ts
│   ├── AccountService.ts
│   ├── NotificationService.ts
│   ├── TransactionLogger.ts
│
│── facade/
│   ├── BankFacade.ts
│
│── main.ts

```

---

## 📦 Description of Classes

| Class                | Role                                                         |
|----------------------|--------------------------------------------------------------|
| `AuthService`        | Handles user authentication                                  |
| `AccountService`     | Manages account balances and transactions                    |
| `NotificationService`| Sends notifications to users                                 |
| `TransactionLogger`  | Logs transaction details                                     |
| `BankFacade`         | Facade that provides a simple interface for money transfers  |

---

## 💡 How It Works

- Each subsystem (`AuthService`, `AccountService`, `NotificationService`, `TransactionLogger`) handles a specific responsibility.
- `BankFacade` coordinates these subsystems, exposing a simple `transfer` method for clients.
- The client interacts only with the `BankFacade`, not with the individual subsystems.

---

## ✅ Sample Output

```

Starting money transfer...
Authenticating user: Arjun
Debited ₹300 from Arjun's account
Credited ₹300 to Raj's account
Transaction: ₹300 from Arjun to Raj
Notification to Arjun: ₹300 transferred to Raj
Notification to Raj: ₹300 received from Arjun
Transfer successful


Starting money transfer...
Authenticating user: Raj
Debited ₹600 from Raj's account
Credited ₹600 to Arjun's account
Transaction: ₹600 from Raj to Arjun
Notification to Raj: ₹600 transferred to Arjun
Notification to Arjun: ₹600 received from Raj
Transfer successful


Starting money transfer...
Authenticating user:
Transfer failed: Authentication failed
```

---

## ▶️ How to Compile and Run

```sh
tsc Fascade.ts
node Fascade.js
```

---

## Benefits Demonstrated

- Simplifies client interaction with complex subsystems
- Reduces coupling between client code and subsystem classes
- Makes the system easier to use and maintain

---

## Summary

The Facade Pattern is ideal for providing a simple interface to complex systems, improving usability, and reducing dependencies between clients and