// Payment Method Interface (Implementor)
export interface PaymentMethod {
  pay(amount: number): void;
}
