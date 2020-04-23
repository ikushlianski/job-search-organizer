import { ID } from '../types';

export interface QuestionGroup {
  id: ID;
  name: QuestionGroupNames;
}

export enum QuestionGroupNames {
  project = 'project',
  office = 'office',
  coding = 'coding',
  employment = 'employment',
  workplace = 'workplace',
  company = 'company',
  benefits = 'benefits',
  others = 'others',
}
