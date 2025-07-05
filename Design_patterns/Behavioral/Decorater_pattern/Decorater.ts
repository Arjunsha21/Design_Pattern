// Base Component Interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
  cost(): number {
    return 50;
  }

  description(): string {
    return "Simple Coffee";
  }
}

// Decorator Base Class
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 10;
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 5;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

class CreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 15;
  }

  description(): string {
    return this.coffee.description() + ", Cream";
  }
}

// Usage
const simple = new SimpleCoffee();
console.log(simple.description(), "→ ₹" + simple.cost());

const withMilk = new MilkDecorator(simple);
console.log(withMilk.description(), "→ ₹" + withMilk.cost());

const withMilkSugar = new SugarDecorator(withMilk);
console.log(withMilkSugar.description(), "→ ₹" + withMilkSugar.cost());

const withAll = new CreamDecorator(withMilkSugar);
console.log(withAll.description(), "→ ₹" + withAll.cost());


//Without Decorator Pattern
// Base Coffee class
// class SimpleCoffee {
//   cost(): number {
//     return 50;
//   }

//   description(): string {
//     return "Simple Coffee";
//   }
// }

// // Add-on: Coffee with Milk
// class CoffeeWithMilk extends SimpleCoffee {
//   cost(): number {
//     return super.cost() + 10;
//   }

//   description(): string {
//     return super.description() + ", Milk";
//   }
// }

// // Add-on: Coffee with Milk and Sugar
// class CoffeeWithMilkAndSugar extends SimpleCoffee {
//   cost(): number {
//     return super.cost() + 10 + 5;
//   }

//   description(): string {
//     return super.description() + ", Milk, Sugar";
//   }
// }

// // Add-on: Coffee with Milk, Sugar, and Cream
// class CoffeeWithAllExtras extends SimpleCoffee {
//   cost(): number {
//     return super.cost() + 10 + 5 + 15;
//   }

//   description(): string {
//     return super.description() + ", Milk, Sugar, Cream";
//   }
// }

// // Usage
// const basic = new SimpleCoffee();
// console.log(basic.description(), "→ ₹" + basic.cost());

// const milkCoffee = new CoffeeWithMilk();
// console.log(milkCoffee.description(), "→ ₹" + milkCoffee.cost());

// const milkSugarCoffee = new CoffeeWithMilkAndSugar();
// console.log(milkSugarCoffee.description(), "→ ₹" + milkSugarCoffee.cost());

// const allInCoffee = new CoffeeWithAllExtras();
// console.log(allInCoffee.description(), "→ ₹" + allInCoffee.cost());
