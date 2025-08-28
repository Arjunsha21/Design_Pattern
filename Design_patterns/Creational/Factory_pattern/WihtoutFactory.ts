// Abstract Product
// interface NotificationSender {
//     send(message: string): string;
// }

// // Concrete Product: Email
// class EmailSender implements NotificationSender {
//     send(message: string): string {
//         return `Email sent with message: "${message}"`;
//     }
// }

// // Concrete Product: SMS
// class SMSSender implements NotificationSender {
//     send(message: string): string {
//         return `SMS sent with message: "${message}"`;
//     }
// }

// // Abstract Creator
// abstract class NotificationCreator {
//     public abstract createSender(): NotificationSender;

//     public notifyUser(message: string): string {
//         const sender = this.createSender();
//         return sender.send(message);
//     }
// }

// // Concrete Creator: Email
// class EmailNotificationCreator extends NotificationCreator {
//     public createSender(): NotificationSender {
//         return new EmailSender();
//     }
// }

// // Concrete Creator: SMS
// class SMSNotificationCreator extends NotificationCreator {
//     public createSender(): NotificationSender {
//         return new SMSSender();
//     }
// }

// // Client code — no need to know about concrete classes
// function notifyUserWithFactory(creator: NotificationCreator, message: string) {
//     console.log(creator.notifyUser(message));
// }

// // Example usage
// console.log("\nWITH FACTORY METHOD:");
// notifyUserWithFactory(new EmailNotificationCreator(), "Your order has been shipped!");
// notifyUserWithFactory(new SMSNotificationCreator(), "Your OTP is 123456");


// wihtout factory method
// Abstract Product
interface NotificationSender {
    send(message: string): string;
}

// Concrete Product: Email
class EmailSender implements NotificationSender {
    send(message: string): string {
        return `Email sent with message: "${message}"`;
    }
}

// Concrete Product: SMS
class SMSSender implements NotificationSender {
    send(message: string): string {
        return `SMS sent with message: "${message}"`;
    }
}

// Client code tightly coupled with concrete classes
function notifyUserWithoutFactory(type: string, message: string) {
    let sender: NotificationSender;

    if (type === "email") {
        sender = new EmailSender();
    } else if (type === "sms") {
        sender = new SMSSender();
    } else {
        throw new Error("Unsupported notification type");
    }

    console.log(sender.send(message));
}

// Example usage
console.log("WITHOUT FACTORY:");
notifyUserWithoutFactory("email", "Your order has been shipped!");
notifyUserWithoutFactory("sms", "Your OTP is 123456");
