// StyleFactory.ts
import { CharacterStyle } from "./CharacterStyle";

export class StyleFactory {
  private static styles = new Map<string, CharacterStyle>();

  static getStyle(font: string, size: number, bold: boolean): CharacterStyle {
    if (!font) throw new Error("Font is required");
    if (size <= 0) throw new Error("Size must be positive");

    const key = `${font}_${size}_${bold}`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new CharacterStyle(font, size, bold));
    }
    return this.styles.get(key)!;
  }
}
