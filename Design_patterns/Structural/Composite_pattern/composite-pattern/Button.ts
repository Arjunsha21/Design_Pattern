// Button.ts
import { UIComponent } from "./UIComponent";

export class Button implements UIComponent {
  constructor(public label: string) {}

  render(indent: string = ''): void {
    console.log(`${indent}<Button>: ${this.label}`);
  }
}
