export interface ILogger {
    log(message: string): void;
    getHistory(): string[];
}


