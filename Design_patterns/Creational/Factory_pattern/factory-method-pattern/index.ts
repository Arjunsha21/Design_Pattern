import { EmailNotificationCreator } from "./creators/EmailNotificationCreator";
import { SMSNotificationCreator } from "./creators/SMSNotificationCreator";
import { NotificationCreator } from "./creators/NotificationCreator";

function notifyUserWithFactory(creator: NotificationCreator, message: string) {
    console.log(creator.notifyUser(message));
}

console.log("\nWITH FACTORY METHOD:");

// Valid notifications
notifyUserWithFactory(new EmailNotificationCreator(), "Your order has been shipped!");
notifyUserWithFactory(new SMSNotificationCreator(), "Your OTP is 123456");

// Error cases
notifyUserWithFactory(new EmailNotificationCreator(), "");
notifyUserWithFactory(new SMSNotificationCreator(), "This message is way too long for an SMS and should throw an error because it exceeds 160 characters...".repeat(3));


