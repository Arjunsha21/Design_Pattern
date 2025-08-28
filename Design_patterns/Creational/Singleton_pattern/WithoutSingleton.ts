class LoggerSingleton {
    private static instance: LoggerSingleton;
    private logHistory: string[] = [];

    // Private constructor prevents direct instantiation
    private constructor() {}

    public static getInstance(): LoggerSingleton {
        if (!LoggerSingleton.instance) {
            LoggerSingleton.instance = new LoggerSingleton();
        }
        return LoggerSingleton.instance;
    }

    public log(message: string): void {
        this.logHistory.push(message);
        console.log(`Logger: ${message}`);
    }

    public getHistory(): string[] {
        return this.logHistory;
    }
}

// Example usage
const singletonLogger1 = LoggerSingleton.getInstance();
const singletonLogger2 = LoggerSingleton.getInstance();

singletonLogger1.log("First log message.");
singletonLogger2.log("Second log message.");

// Both point to the same instance -> shared history
console.log("LoggerSingleton history:", singletonLogger1.getHistory()); 
console.log("LoggerSingleton history (from logger2):", singletonLogger2.getHistory());

//  Without Singleton
// class LoggerWithoutSingleton {
//     private logHistory: string[] = [];

//     public log(message: string): void {
//         this.logHistory.push(message);
//         console.log(`Logger: ${message}`);
//     }

//     public getHistory(): string[] {
//         return this.logHistory;
//     }
// }

// // Example usage
// const logger1 = new LoggerWithoutSingleton();
// const logger2 = new LoggerWithoutSingleton();

// logger1.log("First log message.");
// logger2.log("Second log message.");

// // Different instances -> different histories
// console.log("Logger1 history:", logger1.getHistory()); // ["First log message."]
// console.log("Logger2 history:", logger2.getHistory()); // ["Second log message."]
