// KeywordExpression.ts
import { Expression } from "./Expression";

export class KeywordExpression implements Expression {
  constructor(private keyword: string) {}

  interpret(context: string): boolean {
    return context.toLowerCase().includes(this.keyword.toLowerCase());
  }
}
