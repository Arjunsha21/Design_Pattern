// Common interface
interface Image {
  display(): void;
}

// Real object (expensive to create/load)
class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk(); // Simulate expensive operation
  }

  private loadFromDisk(): void {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy class (controls access and defers creation)
class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename); // Load only on first display
    }
    this.realImage.display();
  }
}

const img = new ProxyImage("mountains.jpg");

console.log("App started. Image not yet loaded.");
// No loading yet

console.log("\nUser clicks to view image:");
img.display(); // Loads and displays

console.log("\nUser clicks again:");
img.display(); // Just displays


//Without Proxy Pattern
// class RealImage {
//   constructor(private filename: string) {
//     this.loadFromDisk(); // Always loads at object creation
//   }

//   private loadFromDisk(): void {
//     console.log(`Loading image from disk: ${this.filename}`);
//   }

//   display(): void {
//     console.log(`Displaying image: ${this.filename}`);
//   }
// }

// console.log("App started. Instantiating image...");
// const img = new RealImage("mountains.jpg"); // Always loads

// console.log("\nUser clicks to view image:");
// img.display();

// console.log("\nUser clicks again:");
// img.display();
