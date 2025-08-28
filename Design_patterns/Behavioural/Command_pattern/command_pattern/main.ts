import { StudentActionReceiver } from "./receiver/StudentActionReceiver";
import { ActionInvoker } from "./invoker/ActionInvoker";
import { SelectOptionCommand } from "./commands/SelectOptionCommand";
import { SubmitAnswerCommand } from "./commands/SubmitAnswerCommand";
import { HighlightTextCommand } from "./commands/HighlightTextCommand";

const receiver = new StudentActionReceiver();
const invoker = new ActionInvoker();

const cmd1 = new SelectOptionCommand(receiver, "B");
const cmd2 = new HighlightTextCommand(receiver, "Photosynthesis");
const cmd3 = new SubmitAnswerCommand(receiver, "Oxygen is released");
const cmd4 = new SubmitAnswerCommand(receiver, ""); // ❌ will throw error

invoker.executeCommand(cmd1);
invoker.executeCommand(cmd2);
invoker.executeCommand(cmd3);
invoker.executeCommand(cmd4); // Error handled gracefully

console.log("\nUndo last actions:");
invoker.undoLast();
invoker.undoLast();
