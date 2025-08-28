import { NotificationSender } from "./NotificationSender";

export class SMSSender implements NotificationSender {
    send(message: string): string {
        if (!message || message.trim() === "") {
            throw new Error("SMS message cannot be empty.");
        }
        if (message.length > 160) {
            throw new Error("SMS message cannot exceed 160 characters.");
        }
        return `SMS sent with message: "${message}"`;
    }
}


