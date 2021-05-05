import { Answer } from '../../answer/answer.model';
import { IterationSettings } from '../iteration-settings.model';

// detailed iteration settings
// with all possible answers
export interface DetailedIterationSettingsDto {
  iterationSettings: IterationSettings[];
  answersByQuestion: AnswersByQuestionId;
}

export interface AnswersByQuestionId {
  [key: number]: Pick<Answer, 'id' | 'answer_text'>[];
}
