export class EntityNotFoundError extends Error {
  constructor(entity?: string) {
    super();
    this.message = `${entity} not found`;
  }
}

export class EntityExistsError extends Error {
  constructor(entity?: string) {
    super();
    this.message = `${entity} already exists`;
  }
}
