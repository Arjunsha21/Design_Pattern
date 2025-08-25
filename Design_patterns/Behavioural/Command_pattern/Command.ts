// --------- Command Interface ----------
interface Command {
  execute(): void;
  undo(): void;
}

// --------- Receiver ----------
class StudentActionReceiver {
  selectOption(option: string) {
    console.log(`Selected option: ${option}`);
  }

  submitAnswer(answer: string) {
    console.log(`Submitted answer: ${answer}`);
  }

  highlightText(text: string) {
    console.log(`Highlighted text: "${text}"`);
  }
}

// --------- Concrete Commands ----------
class SelectOptionCommand implements Command {
  constructor(private receiver: StudentActionReceiver, private option: string) {}
  execute(): void {
    this.receiver.selectOption(this.option);
  }
  undo(): void {
    console.log(`Undo select option: ${this.option}`);
  }
}

class SubmitAnswerCommand implements Command {
  constructor(private receiver: StudentActionReceiver, private answer: string) {}
  execute(): void {
    this.receiver.submitAnswer(this.answer);
  }
  undo(): void {
    console.log(`Undo submit answer: ${this.answer}`);
  }
}

class HighlightTextCommand implements Command {
  constructor(private receiver: StudentActionReceiver, private text: string) {}
  execute(): void {
    this.receiver.highlightText(this.text);
  }
  undo(): void {
    console.log(`Undo highlight: "${this.text}"`);
  }
}

// --------- Invoker ----------
class ActionInvoker {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undoLast() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

// --------- Usage in Mindspark ----------
const receiver = new StudentActionReceiver();
const invoker = new ActionInvoker();

const cmd1 = new SelectOptionCommand(receiver, "B");
const cmd2 = new HighlightTextCommand(receiver, "Photosynthesis");
const cmd3 = new SubmitAnswerCommand(receiver, "Oxygen is released");

invoker.executeCommand(cmd1); // Selected option: B
invoker.executeCommand(cmd2); // Highlighted text: "Photosynthesis"
invoker.executeCommand(cmd3); // Submitted answer: Oxygen is released

console.log("\n Undo last action:");
invoker.undoLast(); // Undo submit answer
invoker.undoLast(); // Undo highlight


// // Receiver: Student actions
// class StudentActions {
//   selectOption(option: string) {
//     console.log(`Selected option: ${option}`);
//   }

//   submitAnswer(answer: string) {
//     console.log(`Submitted answer: ${answer}`);
//   }

//   highlightText(text: string) {
//     console.log(`Highlighted text: "${text}"`);
//   }
// }

// // Usage in Mindspark
// const actions = new StudentActions();

// // Execute actions directly
// actions.selectOption("B");              // Selected option: B
// actions.highlightText("Photosynthesis"); // Highlighted text: "Photosynthesis"
// actions.submitAnswer("Oxygen is released"); // Submitted answer: Oxygen is released

// // Undo functionality is hard to implement without Command
// console.log("\n Undo is not supported in this approach");
