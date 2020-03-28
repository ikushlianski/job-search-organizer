import { ID } from '../../types';

export interface IterationParamPriority {
  id: ID;
  parameterId: ID;
  priority: ParamPriority;
}

enum ParamPriority {
  medium, // would be good if this matches
  high, // it's important that this matches
  showStopper, // it's absolutely essential that this matches
}
