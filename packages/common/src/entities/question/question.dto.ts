import { QuestionInterface } from './question.interface';

export type QuestionDto = Omit<QuestionInterface, 'id'>;
