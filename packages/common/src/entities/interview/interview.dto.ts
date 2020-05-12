import { InterviewInterface } from './interview.interface';

export type InterviewDto = Omit<InterviewInterface, 'id'>;
