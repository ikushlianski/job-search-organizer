export class NoIterationQuestionsError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || 'Iteration must have at least 1 question';
  }
}
