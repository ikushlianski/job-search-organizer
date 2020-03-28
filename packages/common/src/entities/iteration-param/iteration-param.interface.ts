import { ID } from '../../types';

export interface IterationParam {
  id: ID;
  iterationId: ID;
  questionId: ID; // question that's important for user in this iteration
  optionId: ID; // answer value
  priority: ParamPriority;
}

enum ParamPriority {
  medium, // would be good if this matches
  high, // it's important that this matches
  showStopper, // it's absolutely essential that this matches
}
