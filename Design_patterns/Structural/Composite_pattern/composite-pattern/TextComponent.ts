// TextComponent.ts
import { UIComponent } from "./UIComponent";

export class TextComponent implements UIComponent {
  constructor(public content: string) {}

  render(indent: string = ''): void {
    console.log(`${indent}<Text>: ${this.content}`);
  }
}
