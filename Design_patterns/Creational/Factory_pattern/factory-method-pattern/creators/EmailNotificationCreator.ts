import { NotificationCreator } from "./NotificationCreator";
import { EmailSender } from "../products/EmailSender";
import { NotificationSender } from "../products/NotificationSender";

export class EmailNotificationCreator extends NotificationCreator {
    public createSender(): NotificationSender {
        return new EmailSender();
    }
}


