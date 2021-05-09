import { Answer } from '../../answer/answer.model';
import { IterationSettingsByCat } from '../iteration-settings.interface';

// detailed iteration settings
// with all possible answers
export interface DetailedIterationSettingsDto {
  iterationSettings: IterationSettingsByCat;
  answersByQuestion: AnswersByQuestionId;
}

export interface AnswersByQuestionId {
  [key: number]: Answer[];
}
