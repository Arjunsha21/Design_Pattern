// OrExpression.ts
import { Expression } from "./Expression";

export class OrExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: string): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}
