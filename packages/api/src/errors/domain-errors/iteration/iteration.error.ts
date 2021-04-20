export class NoIterationQuestionsError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || 'Iteration must have at least 1 question';
  }
}

export class NoIterationAnswersError extends Error {
  constructor(message?: string) {
    super();
    this.message =
      message || 'Iteration question (setting) must have at least 1 answer';
  }
}
