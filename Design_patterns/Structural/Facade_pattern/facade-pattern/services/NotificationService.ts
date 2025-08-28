import { INotificationService } from "../interfaces/INotificationService";

export class NotificationService implements INotificationService {
  send(userId: string, message: string): void {
    if (!userId) throw new Error("Notification failed: invalid user");
    console.log(`Notification to ${userId}: ${message}`);
  }
}
