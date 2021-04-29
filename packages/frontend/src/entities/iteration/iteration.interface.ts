export interface IterationState {
  hasError: boolean;
  message?: string;
  loading: boolean;
  loaded: boolean;
  iterations: Iteration[];
}

export interface Iteration {
  id: number;
  start_date: Date;
  final_date: Date;
  name: string;
}
