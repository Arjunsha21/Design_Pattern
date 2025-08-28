import { Coffee } from "./Coffee";

// Decorator Base Class
export abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}
