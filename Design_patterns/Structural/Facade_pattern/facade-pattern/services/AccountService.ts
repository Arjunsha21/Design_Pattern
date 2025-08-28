import { IAccountService } from "../interfaces/IAccountService";

export class AccountService implements IAccountService {
  private balances: Record<string, number> = {
    "Arjun": 1000,
    "Raj": 500,
  };

  hasSufficientBalance(userId: string, amount: number): boolean {
    if (!this.balances[userId]) {
      throw new Error(`User ${userId} not found`);
    }
    return this.balances[userId] >= amount;
  }

  debit(userId: string, amount: number): void {
    if (!this.hasSufficientBalance(userId, amount)) {
      throw new Error(`Insufficient balance for ${userId}`);
    }
    this.balances[userId] -= amount;
    console.log(`Debited ₹${amount} from ${userId}'s account`);
  }

  credit(userId: string, amount: number): void {
    if (!this.balances[userId]) {
      throw new Error(`User ${userId} not found`);
    }
    this.balances[userId] += amount;
    console.log(`Credited ₹${amount} to ${userId}'s account`);
  }

  getBalance(userId: string): number {
    if (!this.balances[userId]) {
      throw new Error(`User ${userId} not found`);
    }
    return this.balances[userId];
  }
}
