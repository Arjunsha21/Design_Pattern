// CharacterStyle.ts (Interface + Class)
export interface ICharacterStyle {
    render(char: string, x: number, y: number): void;
  }
  
  export class CharacterStyle implements ICharacterStyle {
    constructor(
      public font: string,
      public size: number,
      public bold: boolean
    ) {
      if (!font) throw new Error("Font cannot be empty");
      if (size <= 0) throw new Error("Font size must be positive");
    }
  
    render(char: string, x: number, y: number): void {
      if (!char || char.length !== 1) {
        throw new Error("Invalid character for rendering");
      }
      console.log(
        `Rendering '${char}' at (${x}, ${y}) with style: font=${this.font}, size=${this.size}, bold=${this.bold}`
      );
    }
  }
  