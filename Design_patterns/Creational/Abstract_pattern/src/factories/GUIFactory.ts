import { Button } from "../products/Button";
import { Checkbox } from "../products/Checkbox";

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}


