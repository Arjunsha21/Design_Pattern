// Panel.ts
import { UIComponent } from "./UIComponent";

export class Panel implements UIComponent {
  public children: UIComponent[] = [];

  constructor(public title: string) {}

  add(component: UIComponent): void {
    this.children.push(component);
  }

  render(indent: string = ''): void {
    console.log(`${indent}<Panel>: ${this.title}`);
    for (const child of this.children) {
      child.render(indent + '  ');
    }
  }
}
