export interface ITransactionLogger {
  log(from: string, to: string, amount: number): void;
}
