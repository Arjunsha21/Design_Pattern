// AnswerMemento.ts
import { IMemento } from "./IMemento";

export class AnswerMemento implements IMemento {
  constructor(public readonly state: string) {}
}
