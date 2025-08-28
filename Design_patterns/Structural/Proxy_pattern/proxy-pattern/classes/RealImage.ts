// classes/RealImage.ts
import { Image } from "../interfaces/Image";

export class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    if (!filename || filename.trim() === "") {
      throw new Error("Invalid filename provided");
    }
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  public display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}
