## Factory Method Design Pattern (TypeScript)

### What it is
Defines a method for creating objects in a superclass, allowing subclasses to decide which concrete product to return. This decouples client code from concrete implementations.

### Project structure
```
Creational/Factory_pattern/
 ├── factory-method-pattern/
 │   ├── products/
 │   │   ├── NotificationSender.ts
 │   │   ├── EmailSender.ts
 │   │   └── SMSSender.ts
 │   ├── creators/
 │   │   ├── NotificationCreator.ts
 │   │   ├── EmailNotificationCreator.ts
 │   │   └── SMSNotificationCreator.ts
 │   └── index.ts
 ├── WihtoutFactory.ts   (comparison example without factory)
 └── tsconfig.json
```

### Key components
- **Product interface**: `NotificationSender` with `send(message: string): string`.
- **Concrete products**: `EmailSender`, `SMSSender` implement validation and sending.
- **Abstract creator**: `NotificationCreator` declares `createSender()` and wraps `notifyUser()` with error handling.
- **Concrete creators**: `EmailNotificationCreator`, `SMSNotificationCreator` decide which product to instantiate.

### Error handling
- Products validate input (non-empty messages, SMS <= 160 chars) and throw errors.
- `NotificationCreator.notifyUser()` catches errors and returns a graceful string like:
  - `❌ Notification failed: SMS message cannot exceed 160 characters.`

### Run the example
- With ts-node:
```bash
npx ts-node --project Creational/Factory_pattern/tsconfig.json Creational/Factory_pattern/factory-method-pattern/index.ts
```

- Compile and run:
```bash
npx tsc -p Creational/Factory_pattern
node Creational/Factory_pattern/dist/index.js
```

### Expected output (includes error cases)
```
WITH FACTORY METHOD:
Email sent with message: "Your order has been shipped!"
SMS sent with message: "Your OTP is 123456"
❌ Notification failed: Email message cannot be empty.
❌ Notification failed: SMS message cannot exceed 160 characters.
```

### Without Factory (for comparison)
See `WihtoutFactory.ts` for a version that manually branches on notification type and directly instantiates concrete senders. That approach couples client code to implementations and violates Open/Closed when adding new types.