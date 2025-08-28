// Teacher.ts
import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

export class Teacher implements ISubject {
  private observers: IObserver[] = [];

  addObserver(observer: IObserver): void {
    if (!observer) {
      throw new Error("Observer cannot be null or undefined");
    }
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(message: string): void {
    if (this.observers.length === 0) {
      console.warn("No observers to notify.");
      return;
    }
    for (const observer of this.observers) {
      observer.update(message);
    }
  }

  postAnnouncement(announcement: string): void {
    if (!announcement.trim()) {
      throw new Error("Announcement cannot be empty");
    }
    console.log(`Teacher posted: "${announcement}"`);
    this.notifyObservers(announcement);
  }
}
