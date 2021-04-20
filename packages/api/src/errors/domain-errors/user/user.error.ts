export class UnauthorizedError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || 'Unauthorized';
  }
}

export class UserExistsError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || 'Wrong credentials';
  }
}
