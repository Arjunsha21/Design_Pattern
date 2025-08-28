import { GUIFactory } from "./factories/GUIFactory";
import { LightThemeFactory } from "./factories/LightThemeFactory";
import { DarkThemeFactory } from "./factories/DarkThemeFactory";
import { FactoryError } from "./errors/FactoryError";

function buildUIWithFactory(factory?: GUIFactory | null) {
    try {
        if (!factory) {
            throw new FactoryError("No valid factory was provided.");
        }

        const button = factory.createButton();
        const checkbox = factory.createCheckbox();

        if (!button || !checkbox) {
            throw new FactoryError("Factory failed to create UI components.");
        }

        console.log(button.render());
        console.log(checkbox.render());
    } catch (err) {
        console.error((err as Error).name + ": " + (err as Error).message);
    }
}

console.log("\nWITH ABSTRACT FACTORY:");
buildUIWithFactory(new LightThemeFactory());
buildUIWithFactory(new DarkThemeFactory());
buildUIWithFactory(null);


