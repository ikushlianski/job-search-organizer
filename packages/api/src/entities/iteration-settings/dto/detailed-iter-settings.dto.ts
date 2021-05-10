import { Answer } from '../../answer/answer.model';
import { IterationSettings } from '../iteration-settings.model';
import { Question } from '../../question/question.model';

// detailed iteration settings
// with all possible answers
export interface DetailedIterationSettingsDto {
  iterationSettings: IterationSettings[];
  questionsWithAnswersByCat: {
    [category: string]: Question[];
  };
}

export interface AnswersByQuestionId {
  [key: number]: Answer[];
}
