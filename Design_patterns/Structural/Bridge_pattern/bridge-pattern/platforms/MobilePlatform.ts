import { PaymentPlatform } from "./PaymentPlatform";

export class MobilePlatform extends PaymentPlatform {
  makePayment(amount: number): void {
    console.log("Mobile Payment Started");
    super.makePayment(amount);
  }
}
