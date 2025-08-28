import { PaymentMethod } from "../interfaces/PaymentMethod";

// Abstraction
export class PaymentPlatform {
  constructor(protected method: PaymentMethod) {}

  makePayment(amount: number): void {
    try {
      this.method.pay(amount);
    } catch (error: any) {
      console.error(" Payment failed:", error.message);
    }
  }
}
