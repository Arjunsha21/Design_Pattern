// StyledCharacter.ts
import { CharacterStyle } from "./CharacterStyle";

export class StyledCharacter {
  constructor(
    private char: string,
    private x: number,
    private y: number,
    private style: CharacterStyle
  ) {
    if (!char || char.length !== 1) {
      throw new Error("StyledCharacter requires a single character");
    }
  }

  draw(): void {
    this.style.render(this.char, this.x, this.y);
  }
}
