import { ILogger } from "./ILogger";

export class LoggerSingleton implements ILogger {
    private static instance: LoggerSingleton;
    private logHistory: string[] = [];

    private constructor() {}

    public static getInstance(): LoggerSingleton {
        if (!LoggerSingleton.instance) {
            LoggerSingleton.instance = new LoggerSingleton();
        }
        return LoggerSingleton.instance;
    }

    public log(message: string): void {
        try {
            if (!message || message.trim() === "") {
                throw new Error("Log message cannot be empty.");
            }
            this.logHistory.push(message);
            console.log(`LoggerSingleton: ${message}`);
        } catch (error) {
            console.error("Error while logging:", (error as Error).message);
        }
    }

    public getHistory(): string[] {
        return this.logHistory;
    }
}


