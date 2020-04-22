import { ID } from '../types';

export interface QuestionGroup {
  id: ID;
  name: QuestionGroupNames;
}

export enum QuestionGroupNames {
  project = 'project',
  office = 'office',
  employment = 'employment',
  workplace = 'workplace',
  company = 'company',
  benefits = 'benefits',
  others = 'others',
}
