// main.ts
import { ProxyImage } from "./classes/ProxyImage";

try {
  const img = new ProxyImage("mountains.jpg");

  console.log("App started. Image not yet loaded.");

  console.log("\nUser clicks to view image:");
  img.display(); // Loads and displays

  console.log("\nUser clicks again:");
  img.display(); // Just displays (already loaded)
} catch (err) {
  console.error("Application error:", err);
}
