// Abstract Product interfaces
interface Button {
    render(): string;
}

interface Checkbox {
    render(): string;
}

// Light theme products
class LightButton implements Button {
    render(): string {
        return "Rendering Light Button";
    }
}

class LightCheckbox implements Checkbox {
    render(): string {
        return "Rendering Light Checkbox";
    }
}

// Dark theme products
class DarkButton implements Button {
    render(): string {
        return "Rendering Dark Button";
    }
}

class DarkCheckbox implements Checkbox {
    render(): string {
        return "Rendering Dark Checkbox";
    }
}

// Abstract Factory
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Concrete factories
class LightThemeFactory implements GUIFactory {
    createButton(): Button {
        return new LightButton();
    }
    createCheckbox(): Checkbox {
        return new LightCheckbox();
    }
}

class DarkThemeFactory implements GUIFactory {
    createButton(): Button {
        return new DarkButton();
    }
    createCheckbox(): Checkbox {
        return new DarkCheckbox();
    }
}

// Client code only works with GUIFactory interface
function buildUIWithFactory(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    console.log(button.render());
    console.log(checkbox.render());
}

// Example usage
console.log("\nWITH ABSTRACT FACTORY:");
buildUIWithFactory(new LightThemeFactory());
buildUIWithFactory(new DarkThemeFactory());

//WithOut Abstract Factory
// // Abstract Product interfaces
// interface Button {
//     render(): string;
// }

// interface Checkbox {
//     render(): string;
// }

// // Light theme products
// class LightButton implements Button {
//     render(): string {
//         return "Rendering Light Button";
//     }
// }

// class LightCheckbox implements Checkbox {
//     render(): string {
//         return "Rendering Light Checkbox";
//     }
// }

// // Dark theme products
// class DarkButton implements Button {
//     render(): string {
//         return "Rendering Dark Button";
//     }
// }

// class DarkCheckbox implements Checkbox {
//     render(): string {
//         return "Rendering Dark Checkbox";
//     }
// }

// // Client code tightly coupled to concrete classes
// function buildUIWithoutFactory(theme: string) {
//     let button: Button;
//     let checkbox: Checkbox;

//     if (theme === "light") {
//         button = new LightButton();
//         checkbox = new LightCheckbox();
//     } else if (theme === "dark") {
//         button = new DarkButton();
//         checkbox = new DarkCheckbox();
//     } else {
//         throw new Error("Unknown theme");
//     }

//     console.log(button.render());
//     console.log(checkbox.render());
// }

// // Example usage
// console.log("WITHOUT ABSTRACT FACTORY:");
// buildUIWithoutFactory("light");
// buildUIWithoutFactory("dark");