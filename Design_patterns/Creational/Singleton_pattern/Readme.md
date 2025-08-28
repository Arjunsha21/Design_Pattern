## Singleton Design Pattern (TypeScript)

### What it is
Ensures a class has only one instance and provides a global access point to it. Great for shared services like logging, configuration, or caches.

### Project structure
```
Creational/Singleton_pattern/
 ├── ILogger.ts
 ├── LoggerSingleton.ts
 ├── main.ts
 ├── WithoutSingleton.ts
 └── tsconfig.json
```

### Key components
- **ILogger**: Interface with `log(message)` and `getHistory()`.
- **LoggerSingleton**: Private constructor + static `getInstance()`; stores shared `logHistory` and validates input in `log()`.
- **main.ts**: Uses two references that share the same singleton instance and history.

### Error handling
- Empty/whitespace messages are rejected in `log()` with a clear error, handled gracefully without crashing.

### Run
- With ts-node:
```bash
npx ts-node --project Creational/Singleton_pattern/tsconfig.json Creational/Singleton_pattern/main.ts
```

- Compile and run:
```bash
npx tsc -p Creational/Singleton_pattern
node Creational/Singleton_pattern/dist/main.js
```

### Expected output
```
=== WITH SINGLETON ===
LoggerSingleton: First log message.
LoggerSingleton: Second log message.
Error while logging: Log message cannot be empty.
Logger history (from logger1): [ 'First log message.', 'Second log message.' ]
Logger history (from logger2): [ 'First log message.', 'Second log message.' ]
```

### Comparison
- See `WithoutSingleton.ts` for a multi-instance logger example. Each instance keeps its own history, unlike the singleton’s shared history.