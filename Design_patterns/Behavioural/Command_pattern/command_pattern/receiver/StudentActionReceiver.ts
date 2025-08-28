export class StudentActionReceiver {
    selectOption(option: string) {
      if (!option) {
        throw new Error("Option cannot be empty.");
      }
      console.log(`Selected option: ${option}`);
    }
  
    submitAnswer(answer: string) {
      if (!answer) {
        throw new Error("Answer cannot be empty.");
      }
      console.log(`Submitted answer: ${answer}`);
    }
  
    highlightText(text: string) {
      if (!text) {
        throw new Error("Text to highlight cannot be empty.");
      }
      console.log(`Highlighted text: "${text}"`);
    }
  }
  