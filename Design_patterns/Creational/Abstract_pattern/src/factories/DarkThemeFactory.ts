import { GUIFactory } from "./GUIFactory";
import { Button } from "../products/Button";
import { Checkbox } from "../products/Checkbox";
import { DarkButton } from "../products/DarkButton";
import { DarkCheckbox } from "../products/DarkCheckbox";

export class DarkThemeFactory implements GUIFactory {
    createButton(): Button {
        return new DarkButton();
    }
    createCheckbox(): Checkbox {
        return new DarkCheckbox();
    }
}


