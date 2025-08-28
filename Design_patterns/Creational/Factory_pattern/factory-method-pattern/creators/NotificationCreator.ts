import { NotificationSender } from "../products/NotificationSender";

export abstract class NotificationCreator {
    public abstract createSender(): NotificationSender;

    public notifyUser(message: string): string {
        try {
            const sender = this.createSender();
            return sender.send(message);
        } catch (error) {
            if (error instanceof Error) {
                return `❌ Notification failed: ${error.message}`;
            }
            return "❌ Unknown error occurred while sending notification.";
        }
    }
}


