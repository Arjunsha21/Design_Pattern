import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

// Concrete Decorator - Cream
export class CreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 15;
  }

  description(): string {
    return this.coffee.description() + ", Cream";
  }
}
