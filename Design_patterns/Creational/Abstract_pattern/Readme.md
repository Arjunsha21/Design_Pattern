## Abstract Factory Design Pattern (TypeScript)

### What it is
The Abstract Factory is a creational pattern that provides an interface for creating families of related objects without specifying their concrete classes. It keeps client code decoupled from the actual implementations and preserves consistency among related products.

### When to use it
- **Multiple variants**: You have several families of related products (e.g., light vs dark theme components).
- **Consistency required**: Products from the same family must be used together.
- **Decoupling**: Client code should rely only on interfaces, not concrete classes.
- **Easy extension**: You want to add new variants by implementing a new factory without touching client code.

### Project structure
```
Creational/Abstract_pattern/
 ├── src/
 │   ├── products/
 │   │   ├── Button.ts
 │   │   ├── Checkbox.ts
 │   │   ├── LightButton.ts
 │   │   ├── LightCheckbox.ts
 │   │   ├── DarkButton.ts
 │   │   └── DarkCheckbox.ts
 │   ├── factories/
 │   │   ├── GUIFactory.ts
 │   │   ├── LightThemeFactory.ts
 │   │   └── DarkThemeFactory.ts
 │   ├── errors/
 │   │   └── FactoryError.ts
 │   └── main.ts
 └── tsconfig.json
```

### Key components
- **Product interfaces**: `Button`, `Checkbox` expose `render(): string`.
- **Concrete products**: `LightButton`, `LightCheckbox`, `DarkButton`, `DarkCheckbox` implement the interfaces.
- **Abstract factory**: `GUIFactory` declares `createButton()` and `createCheckbox()`.
- **Concrete factories**: `LightThemeFactory`, `DarkThemeFactory` create consistent product families.
- **Error handling**: `FactoryError` signals invalid factory usage.

### How it works (flow)
1. Client receives a `GUIFactory` (light or dark).
2. Client asks the factory to create a `Button` and a `Checkbox`.
3. Client renders the components without knowing their concrete classes.
4. If no factory is provided, a `FactoryError` is thrown and handled.

### Run the example
- Build and run (recommended):
```bash
npx tsc -p Creational/Abstract_pattern
node Creational/Abstract_pattern/dist/main.js
```

- Or run directly with ts-node:
```bash
npx ts-node --project Creational/Abstract_pattern/tsconfig.json Creational/Abstract_pattern/src/main.ts
```

### Expected output
```
WITH ABSTRACT FACTORY:
Rendering Light Button
Rendering Light Checkbox
Rendering Dark Button
Rendering Dark Checkbox
FactoryError: ❌ No valid factory was provided.
```

### Benefits
- **Consistency**: Ensures compatible products are used together.
- **Decoupling**: Client depends on interfaces, not implementations.
- **Extensibility**: Add new families by creating a new factory.

### Trade-offs
- **More classes**: Increases the number of types/files.
- **Upfront design**: Requires clear definition of product families and interfaces.

### Adding a new theme (example)
1. Create products, e.g., `BlueButton`, `BlueCheckbox` implementing `Button` and `Checkbox`.
2. Add `BlueThemeFactory implements GUIFactory` that returns the blue products.
3. Use `buildUIWithFactory(new BlueThemeFactory())` in `main.ts`.

This repository contains an additional file `Abstract.ts` showing a pattern-focused variant; the runnable example lives under `src/` and is configured via the local `tsconfig.json`.