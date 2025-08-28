import { LoggerSingleton } from "./LoggerSingleton";

console.log("=== WITH SINGLETON ===");

const logger1 = LoggerSingleton.getInstance();
const logger2 = LoggerSingleton.getInstance();

logger1.log("First log message.");
logger2.log("Second log message.");
logger1.log("");

console.log("Logger history (from logger1):", logger1.getHistory());
console.log("Logger history (from logger2):", logger2.getHistory());


