import { AuthService } from "../services/AuthService";
import { AccountService } from "../services/AccountService";
import { NotificationService } from "../services/NotificationService";
import { TransactionLogger } from "../services/TransactionLogger";

export class BankFacade {
  private auth = new AuthService();
  private account = new AccountService();
  private notify = new NotificationService();
  private logger = new TransactionLogger();

  transfer(from: string, to: string, amount: number): void {
    console.log("\nStarting money transfer...");

    try {
      if (!this.auth.verifyUser(from)) {
        throw new Error("Authentication failed");
      }

      if (!this.account.hasSufficientBalance(from, amount)) {
        throw new Error("Insufficient balance");
      }

      this.account.debit(from, amount);
      this.account.credit(to, amount);
      this.logger.log(from, to, amount);
      this.notify.send(from, `₹${amount} transferred to ${to}`);
      this.notify.send(to, `₹${amount} received from ${from}`);

      console.log("Transfer successful\n");
    } catch (error: any) {
      console.error("Transfer failed:", error.message);
    }
  }
}
