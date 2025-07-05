//shared font and style info
class CharacterStyle {
  constructor(public font: string, public size: number, public bold: boolean) {}

  render(char: string, x: number, y: number): void {
    console.log(
      `Rendering '${char}' at (${x}, ${y}) with style: font=${this.font}, size=${this.size}, bold=${this.bold}`
    );
  }
}

// Flyweight
class StyleFactory {
  private static styles = new Map<string, CharacterStyle>();

  static getStyle(font: string, size: number, bold: boolean): CharacterStyle {
    const key = `${font}_${size}_${bold}`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new CharacterStyle(font, size, bold));
    }
    return this.styles.get(key)!;
  }
}

// Extrinsic state: character and position
class StyledCharacter {
  constructor(
    private char: string,
    private x: number,
    private y: number,
    private style: CharacterStyle
  ) {}

  draw(): void {
    this.style.render(this.char, this.x, this.y);
  }
}

const text: StyledCharacter[] = [];

text.push(new StyledCharacter("H", 0, 0, StyleFactory.getStyle("Arial", 12, false)));
text.push(new StyledCharacter("e", 10, 0, StyleFactory.getStyle("Arial", 12, false)));
text.push(new StyledCharacter("l", 20, 0, StyleFactory.getStyle("Arial", 12, false)));
text.push(new StyledCharacter("l", 30, 0, StyleFactory.getStyle("Arial", 12, false)));
text.push(new StyledCharacter("o", 40, 0, StyleFactory.getStyle("Arial", 12, false)));

text.forEach(char => char.draw());


//Without Flyweight pattern 
// class FullCharacter {
//   constructor(
//     private char: string,
//     private x: number,
//     private y: number,
//     private font: string,
//     private size: number,
//     private bold: boolean
//   ) {}

//   draw(): void {
//     console.log(
//       `Rendering '${this.char}' at (${this.x}, ${this.y}) with style: font=${this.font}, size=${this.size}, bold=${this.bold}`
//     );
//   }
// }

// const text: FullCharacter[] = [];

// text.push(new FullCharacter("H", 0, 0, "Arial", 12, false));
// text.push(new FullCharacter("e", 10, 0, "Arial", 12, false));
// text.push(new FullCharacter("l", 20, 0, "Arial", 12, false));
// text.push(new FullCharacter("l", 30, 0, "Arial", 12, false));
// text.push(new FullCharacter("o", 40, 0, "Arial", 12, false));

// text.forEach(char => char.draw());
