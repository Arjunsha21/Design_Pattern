import { ITransactionLogger } from "../interfaces/ITransactionLogger";

export class TransactionLogger implements ITransactionLogger {
  log(from: string, to: string, amount: number): void {
    if (amount <= 0) throw new Error("Invalid transaction amount");
    console.log(`Transaction: ₹${amount} from ${from} to ${to}`);
  }
}
