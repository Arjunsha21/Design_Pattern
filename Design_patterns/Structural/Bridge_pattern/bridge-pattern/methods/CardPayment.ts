import { PaymentMethod } from "../interfaces/PaymentMethod";

export class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    if (amount <= 0) {
      throw new Error("❌ Invalid payment amount. Must be greater than 0.");
    }
    console.log(`✅ Paid ₹${amount} using Credit Card`);
  }
}
