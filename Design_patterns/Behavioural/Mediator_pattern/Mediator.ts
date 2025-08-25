// Mediator interface
interface Mediator {
  sendMessage(message: string, sender: Participant): void;
  addParticipant(participant: Participant): void;
}

// Abstract participant (Teacher / Student)
abstract class Participant {
  protected mediator: Mediator;
  protected name: string;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
    this.mediator.addParticipant(this);
  }

  abstract receiveMessage(message: string): void;

  sendMessage(message: string) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }
}

// Concrete Mediator
class ChatMediator implements Mediator {
  private participants: Participant[] = [];

  addParticipant(participant: Participant): void {
    this.participants.push(participant);
  }

  sendMessage(message: string, sender: Participant): void {
    for (const participant of this.participants) {
      if (participant !== sender) {
        participant.receiveMessage(message);
      }
    }
  }
}

// Concrete Participants
class Teacher extends Participant {
  receiveMessage(message: string): void {
    console.log(`Teacher ${this.name} received: ${message}`);
  }
}

class Student extends Participant {
  receiveMessage(message: string): void {
    console.log(`Student ${this.name} received: ${message}`);
  }
}

// Usage
const chatMediator = new ChatMediator();

const teacher = new Teacher("Ms. Anitha", chatMediator);
const student1 = new Student("Arjun", chatMediator);
const student2 = new Student("Dharma", chatMediator);

teacher.sendMessage("Hello class, today’s topic is Fractions.");
student1.sendMessage("Got it, ma’am!");
student2.sendMessage("Yes ma’am, I’m ready!");
