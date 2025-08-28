export interface IAccountService {
  hasSufficientBalance(userId: string, amount: number): boolean;
  debit(userId: string, amount: number): void;
  credit(userId: string, amount: number): void;
  getBalance(userId: string): number;
}
