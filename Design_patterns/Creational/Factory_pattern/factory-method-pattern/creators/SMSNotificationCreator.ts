import { NotificationCreator } from "./NotificationCreator";
import { SMSSender } from "../products/SMSSender";
import { NotificationSender } from "../products/NotificationSender";

export class SMSNotificationCreator extends NotificationCreator {
    public createSender(): NotificationSender {
        return new SMSSender();
    }
}


