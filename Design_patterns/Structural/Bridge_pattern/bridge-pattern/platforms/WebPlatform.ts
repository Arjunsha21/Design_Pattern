import { PaymentPlatform } from "./PaymentPlatform";

export class WebPlatform extends PaymentPlatform {
  makePayment(amount: number): void {
    console.log("Web Payment Started");
    super.makePayment(amount);
  }
}
