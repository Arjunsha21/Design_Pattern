## Builder Design Pattern (TypeScript)

### What it is
The Builder pattern separates the construction of a complex object from its representation. It builds objects step-by-step via a fluent API and returns a fully validated product from `build()`.

### When to use it
- **Many options/steps**: Object has many optional/required parameters.
- **Readable construction**: Prefer method chaining over telescoping constructors.
- **Validation**: Need to validate configurations before producing the final object.

### Project structure
```
Creational/Builder_pattern/
 ├── Car.ts
 ├── ICarBuilder.ts
 ├── CarBuilder.ts
 ├── index.ts
 └── tsconfig.json
```

### Key components
- **Product (`Car`)**: Holds the final configuration and exposes `specs()`.
- **Builder interface (`ICarBuilder`)**: Declares building steps and `build()`.
- **Concrete builder (`CarBuilder`)**: Implements steps with validations and returns a `Car`.
- **Client (`index.ts`)**: Uses the builder to construct different car variants.

### Usage example
```ts
// index.ts
import { CarBuilder } from "./CarBuilder";

const car = new CarBuilder()
  .setEngine("Petrol")
  .setTransmission("Manual")
  .setSunroof(true)
  .setGPS(false)
  .setAirbags(2)
  .build();

car.specs();
```

### Error handling in builder
- Throws if required fields are missing (e.g., engine, transmission).
- Validates allowed values (e.g., transmission must be "Manual" or "Automatic").
- Prevents invalid states (e.g., negative airbags).

### Run the example
- With ts-node:
```bash
npx ts-node Creational/Builder_pattern/index.ts
```

- Compile and run:
```bash
npx tsc -p Creational/Builder_pattern
node Creational/Builder_pattern/dist/index.js
```

### Expected output
```
WITH BUILDER:
Car with Petrol engine, Manual transmission, sunroof, no GPS, 2 airbags.
Car with Electric engine, Automatic transmission, no sunroof, GPS, 6 airbags.
❌ Error while building car: Engine type must be provided
```

### Benefits
- **Readable and maintainable** object construction
- **Validation and safety** before object creation
- **Flexibility** to create multiple variants with the same steps

### Extending
Add new configuration methods to `ICarBuilder` and implement them in `CarBuilder`. Keep `build()` as the single point that guarantees a valid `Car`.