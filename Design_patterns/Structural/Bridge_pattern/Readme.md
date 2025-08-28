## Bridge Design Pattern (TypeScript)

### What it is
The Bridge pattern decouples an abstraction from its implementation, allowing both to vary independently. It prevents the "cartesian product" problem where you'd need classes like `WebUPIPayment`, `WebCardPayment`, `MobileUPIPayment`, etc.

### Project structure
```
Structural/Bridge_pattern/
 ├── bridge-pattern/
 │   ├── interfaces/
 │   │   └── PaymentMethod.ts
 │   ├── methods/
 │   │   ├── UPIPayment.ts
 │   │   └── CardPayment.ts
 │   ├── platforms/
 │   │   ├── PaymentPlatform.ts
 │   │   ├── WebPlatform.ts
 │   │   └── MobilePlatform.ts
 │   └── main.ts
 ├── WithoutBridge.ts        (comparison example)
 └── tsconfig.json
```

### Key components

#### **Implementor (PaymentMethod)**
- **Interface**: `PaymentMethod` with `pay(amount: number): void`
- **Concrete Implementors**: `UPIPayment`, `CardPayment`
- Each validates input and handles payment logic independently

#### **Abstraction (PaymentPlatform)**
- **Base**: `PaymentPlatform` takes a `PaymentMethod` in constructor
- **Refined**: `WebPlatform`, `MobilePlatform` extend base with platform-specific behavior
- Wraps payment calls with error handling

### How the Bridge works
Instead of inheritance hierarchies like:
```
❌ Bad: WebUPIPayment, WebCardPayment, MobileUPIPayment, MobileCardPayment
```

We use composition:
```
✅ Good: WebPlatform + UPIPayment, WebPlatform + CardPayment, etc.
```

### Error handling
- Payment methods validate amounts (must be > 0)
- `PaymentPlatform.makePayment()` catches errors and displays graceful messages
- System continues running even with invalid inputs

### Run the example
```bash
npx ts-node --project Structural/Bridge_pattern/tsconfig.json Structural/Bridge_pattern/bridge-pattern/main.ts
```

### Expected output
```
🌐 Web Payment Started
✅ Paid ₹1000 via UPI
📱 Mobile Payment Started
✅ Paid ₹2000 using Credit Card
🌐 Web Payment Started
✅ Paid ₹1500 using Credit Card
📱 Mobile Payment Started
✅ Paid ₹800 via UPI
🌐 Web Payment Started
⚠️ Payment failed: ❌ Invalid payment amount. Must be greater than 0.
```

### Benefits
- **Eliminates inheritance explosion**: No need for every platform × method combination
- **Runtime flexibility**: Can switch payment methods or platforms at runtime
- **Single responsibility**: Each class has one clear purpose
- **Open/Closed**: Easy to add new platforms or payment methods without changing existing code

### When to use
- When you have multiple dimensions of variation (platform × payment method)
- When you want to avoid deep inheritance hierarchies
- When you need runtime flexibility in choosing implementations

### Comparison
See `WithoutBridge.ts` for a traditional approach that would require separate classes for each combination, leading to maintenance issues and code duplication.