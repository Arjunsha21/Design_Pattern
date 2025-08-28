import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

// Concrete Decorator - Milk
export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 10;
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}
