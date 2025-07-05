// Common interface
interface UIComponent {
  render(indent?: string): void;
}

// Leaf: TextComponent
class TextComponent implements UIComponent {
  constructor(public content: string) {}

  render(indent: string = ''): void {
    console.log(`${indent}<Text>: ${this.content}`);
  }
}

// Leaf: Button
class Button implements UIComponent {
  constructor(public label: string) {}

  render(indent: string = ''): void {
    console.log(`${indent}<Button>: ${this.label}`);
  }
}

// Composite: Panel
class Panel implements UIComponent {
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

// ✅ Usage
const loginPanel = new Panel("Login Panel");
loginPanel.add(new TextComponent("Username"));
loginPanel.add(new Button("Submit"));

const sidebar = new Panel("Sidebar");
sidebar.add(new Button("Home"));
sidebar.add(new Button("Settings"));

const appUI = new Panel("App UI");
appUI.add(loginPanel);
appUI.add(sidebar);

appUI.render();



//Without Composite
// type UIElement = TextComponent | Button | Panel;

// function renderUI(component: UIElement, indent: string = '') {
//   if (component instanceof TextComponent) {
//     console.log(`${indent}<Text>: ${component.content}`);
//   } else if (component instanceof Button) {
//     console.log(`${indent}<Button>: ${component.label}`);
//   } else if (component instanceof Panel) {
//     console.log(`${indent}<Panel>: ${component.title}`);
//     for (const child of component.children) {
//       renderUI(child, indent + '  ');
//     }
//   }
// }
