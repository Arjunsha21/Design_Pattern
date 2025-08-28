// Expression.ts
export interface Expression {
    interpret(context: string): boolean;
  }
  