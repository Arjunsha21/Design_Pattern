import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

// Concrete Decorator - Sugar
export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 5;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}
