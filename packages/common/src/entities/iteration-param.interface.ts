import { ID } from '../types';

export interface IterationParam {
  id: ID;
  iterationId: ID;
  questionId: ID; // question that's important for user in this iteration
  guideline: IterationGuideline;
  priority: ParamPriority;
}

export enum IterationGuideline {
  theLessTheBetter = -1,
  neutral = 0,
  theMoreTheBetter = 1,
}

export enum ParamPriority {
  low = 0.5,
  medium = 1, // would be good if this matches
  high = 2, // it's important that this matches
  showStopper = 3, // it's absolutely essential that this matches
}
