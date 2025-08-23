// Memento
class AnswerMemento {
  constructor(public readonly state: string) {}
}

// Originator (Student's current answer)
class StudentAnswer {
  private currentAnswer: string = "";

  write(answer: string) {
    this.currentAnswer = answer;
    console.log(`Student wrote: ${answer}`);
  }

  save(): AnswerMemento {
    return new AnswerMemento(this.currentAnswer);
  }

  restore(memento: AnswerMemento) {
    this.currentAnswer = memento.state;
    console.log(`Restored to: ${this.currentAnswer}`);
  }
}

// Caretaker (History of answers)
class AnswerHistory {
  private mementos: AnswerMemento[] = [];

  push(memento: AnswerMemento) {
    this.mementos.push(memento);
  }

  pop(): AnswerMemento | undefined {
    return this.mementos.pop();
  }
}

// Usage in Mindspark
const student = new StudentAnswer();
const answerHistory = new AnswerHistory();

student.write("Answer 1");
answerHistory.push(student.save());

student.write("Answer 2");
answerHistory.push(student.save());

student.write("Answer 3");

// Undo last answer
student.restore(answerHistory.pop()!); // Goes back to "Answer 2"

// Undo again
student.restore(answerHistory.pop()!); // Goes back to "Answer 1"

