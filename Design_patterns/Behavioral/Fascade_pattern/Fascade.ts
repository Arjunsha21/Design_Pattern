// Subsystems (complex internals)
class AuthService {
  verifyUser(userId: string): boolean {
    console.log(`Authenticating user: ${userId}`);
    return true;
  }
}

class AccountService {
  private balances: Record<string, number> = {
    "Arjun": 1000,
    "Raj": 500,
  };

  hasSufficientBalance(userId: string, amount: number): boolean {
    return this.balances[userId] >= amount;
  }

  debit(userId: string, amount: number) {
    this.balances[userId] -= amount;
    console.log(`Debited ₹${amount} from ${userId}'s account`);
  }

  credit(userId: string, amount: number) {
    this.balances[userId] += amount;
    console.log(`Credited ₹${amount} to ${userId}'s account`);
  }

  getBalance(userId: string): number {
    return this.balances[userId];
  }
}

class NotificationService {
  send(userId: string, message: string) {
    console.log(`🔔 Notification to ${userId}: ${message}`);
  }
}

class TransactionLogger {
  log(from: string, to: string, amount: number) {
    console.log(`Transaction: ₹${amount} from ${from} to ${to}`);
  }
}

// Facade
class BankFacade {
  private auth = new AuthService();
  private account = new AccountService();
  private notify = new NotificationService();
  private logger = new TransactionLogger();

  transfer(from: string, to: string, amount: number) {
    console.log("\n Starting money transfer...");

    if (!this.auth.verifyUser(from)) {
      console.log("Authentication failed");
      return;
    }

    if (!this.account.hasSufficientBalance(from, amount)) {
      console.log("Insufficient balance");
      return;
    }

    this.account.debit(from, amount);
    this.account.credit(to, amount);
    this.logger.log(from, to, amount);
    this.notify.send(from, `₹${amount} transferred to ${to}`);
    this.notify.send(to, `₹${amount} received from ${from}`);

    console.log("Transfer successful\n");
  }
}

const bank = new BankFacade();
bank.transfer("Arjun", "Raj", 300);

//Without Fascade Pattern
// const auth = new AuthService();
// const acc = new AccountService();
// const notify = new NotificationService();
// const log = new TransactionLogger();

// if (auth.verifyUser("Arjun") && acc.hasSufficientBalance("Arjun", 300)) {
//   acc.debit("Arjun", 300);
//   acc.credit("Raj", 300);
//   log.log("Arjun", "Raj", 300);
//   notify.send("Arjun", "₹300 transferred to Raj");
//   notify.send("Raj", "₹300 received from Arjun");
// }

