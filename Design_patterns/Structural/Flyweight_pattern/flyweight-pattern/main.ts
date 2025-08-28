// main.ts
import { StyleFactory } from "./StyleFactory";
import { StyledCharacter } from "./StyledCharacter";

try {
  const text: StyledCharacter[] = [];

  text.push(new StyledCharacter("H", 0, 0, StyleFactory.getStyle("Arial", 12, false)));
  text.push(new StyledCharacter("e", 10, 0, StyleFactory.getStyle("Arial", 12, false)));
  text.push(new StyledCharacter("l", 20, 0, StyleFactory.getStyle("Arial", 12, false)));
  text.push(new StyledCharacter("l", 30, 0, StyleFactory.getStyle("Arial", 12, false)));
  text.push(new StyledCharacter("o", 40, 0, StyleFactory.getStyle("Arial", 12, false)));

  text.forEach(char => char.draw());
} catch (err) {
  console.error("Error rendering text:", (err as Error).message);
}
