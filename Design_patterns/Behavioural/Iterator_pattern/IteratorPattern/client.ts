// client.ts
export async function showQuestions(iterator: Iterator<string> | AsyncIterator<string>) {
    try {
      let result = await iterator.next();
  
      while (!result.done) {
        console.log("Question:", result.value);
        result = await iterator.next();
      }
    } catch (error) {
      console.error("Error while showing questions:", error);
    }
  }
  