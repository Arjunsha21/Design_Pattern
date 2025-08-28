import { SimpleCoffee } from "./SimpleCoffee";
import { MilkDecorator } from "./MilkDecorator";
import { SugarDecorator } from "./SugarDecorator";
import { CreamDecorator } from "./CreamDecorator";

// Client Code
const simple = new SimpleCoffee();
console.log(simple.description(), "→ ₹" + simple.cost());

const withMilk = new MilkDecorator(simple);
console.log(withMilk.description(), "→ ₹" + withMilk.cost());

const withMilkSugar = new SugarDecorator(withMilk);
console.log(withMilkSugar.description(), "→ ₹" + withMilkSugar.cost());

const withAll = new CreamDecorator(withMilkSugar);
console.log(withAll.description(), "→ ₹" + withAll.cost());
