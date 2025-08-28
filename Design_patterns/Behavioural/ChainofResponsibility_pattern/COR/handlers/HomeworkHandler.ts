// --------- Handler Interface ----------
export abstract class HomeworkHandler {
    protected nextHandler: HomeworkHandler | null = null;
  
    setNext(handler: HomeworkHandler): HomeworkHandler {
      this.nextHandler = handler;
      return handler;
    }
  
    abstract handle(submission: string): void;
  }
  