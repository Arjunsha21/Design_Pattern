import { GUIFactory } from "./GUIFactory";
import { Button } from "../products/Button";
import { Checkbox } from "../products/Checkbox";
import { LightButton } from "../products/LightButton";
import { LightCheckbox } from "../products/LightCheckbox";

export class LightThemeFactory implements GUIFactory {
    createButton(): Button {
        return new LightButton();
    }
    createCheckbox(): Checkbox {
        return new LightCheckbox();
    }
}


