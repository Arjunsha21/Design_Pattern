// 1. State Interface
interface HomeworkState {
  submit(): void;
  review(): void;
}

// 2. Concrete States
class DraftState implements HomeworkState {
  constructor(private context: Homework) {}
  submit(): void {
    console.log("Homework submitted for review.");
    this.context.setState(new SubmittedState(this.context));
  }
  review(): void {
    console.log(" Homework is still in Draft. Cannot review.");
  }
}

class SubmittedState implements HomeworkState {
  constructor(private context: Homework) {}
  submit(): void {
    console.log(" Homework already submitted. Cannot submit again.");
  }
  review(): void {
    console.log("Teacher reviewed the homework.");
    this.context.setState(new ReviewedState(this.context));
  }
}

class ReviewedState implements HomeworkState {
  constructor(private context: Homework) {}
  submit(): void {
    console.log(" Homework already reviewed. Cannot resubmit.");
  }
  review(): void {
    console.log(" Homework already reviewed.");
  }
}

// 3. Context
class Homework {
  private state: HomeworkState;

  constructor() {
    this.state = new DraftState(this); // initial state
  }

  setState(state: HomeworkState) {
    this.state = state;
  }

  submit() {
    this.state.submit();
  }

  review() {
    this.state.review();
  }
}

// 4. Usage
const hw = new Homework();

hw.review();   //  Homework is still in Draft
hw.submit();   // Homework submitted for review
hw.submit();   //  Homework already submitted
hw.review();   //  Teacher reviewed the homework
hw.review();   //  Homework already reviewed

// Without Statepattern 
// class Homework {
//   private state: string;

//   constructor() {
//     this.state = "Draft"; // initial state
//   }

//   submit() {
//     if (this.state === "Draft") {
//       console.log("Homework submitted for review.");
//       this.state = "Submitted";
//     } else if (this.state === "Submitted") {
//       console.log(" Homework already submitted. Cannot submit again.");
//     } else if (this.state === "Reviewed") {
//       console.log(" Homework already reviewed. Cannot resubmit.");
//     }
//   }

//   review() {
//     if (this.state === "Draft") {
//       console.log("Homework is still in Draft. Cannot review.");
//     } else if (this.state === "Submitted") {
//       console.log(" Teacher reviewed the homework.");
//       this.state = "Reviewed";
//     } else if (this.state === "Reviewed") {
//       console.log(" Homework already reviewed.");
//     }
//   }
// }

// // Usage
// const hw = new Homework();

// hw.review();   //  Homework is still in Draft
// hw.submit();   // Homework submitted for review
// hw.submit();   //  Homework already submitted
// hw.review();   // Teacher reviewed the homework
// hw.review();   //  Homework already reviewed
