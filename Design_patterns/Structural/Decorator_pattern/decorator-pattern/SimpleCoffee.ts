import { Coffee } from "./Coffee";

// Concrete Component
export class SimpleCoffee implements Coffee {
  cost(): number {
    return 50;
  }

  description(): string {
    return "Simple Coffee";
  }
}
