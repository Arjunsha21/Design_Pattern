// classes/ProxyImage.ts
import { Image } from "../interfaces/Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    if (!filename || filename.trim() === "") {
      throw new Error("Filename cannot be empty");
    }
    this.filename = filename;
  }

  public display(): void {
    try {
      if (this.realImage === null) {
        this.realImage = new RealImage(this.filename); // Lazy loading
      }
      this.realImage.display();
    } catch (error) {
      console.error("Error displaying image:", error);
    }
  }
}
