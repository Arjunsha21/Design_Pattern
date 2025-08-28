import { UPIPayment } from "./methods/UPIPayment";
import { CardPayment } from "./methods/CardPayment";
import { WebPlatform } from "./platforms/WebPlatform";
import { MobilePlatform } from "./platforms/MobilePlatform";

// Bridge Pattern in action

const webWithUPI = new WebPlatform(new UPIPayment());
webWithUPI.makePayment(1000);

const mobileWithCard = new MobilePlatform(new CardPayment());
mobileWithCard.makePayment(2000);

const webWithCard = new WebPlatform(new CardPayment());
webWithCard.makePayment(1500);

const mobileWithUPI = new MobilePlatform(new UPIPayment());
mobileWithUPI.makePayment(800);

// Error Handling Example
const invalidPayment = new WebPlatform(new UPIPayment());
invalidPayment.makePayment(-500);
