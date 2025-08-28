// ISubject.ts
import { IObserver } from "./IObserver";

export interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(message: string): void;
}
