import { NotificationSender } from "./NotificationSender";

export class EmailSender implements NotificationSender {
    send(message: string): string {
        if (!message || message.trim() === "") {
            throw new Error("Email message cannot be empty.");
        }
        return `Email sent with message: "${message}"`;
    }
}


