import { ApplicationState } from '../../../app/store/app.store';
import { ActiveOpportunityState } from '../active-opp.interface';
import { QuestionsWithAnswersByCategory } from '../../question/question.interface';
import { OpportunityAnswer } from '../current-opps.interface';

export const selectActiveOpportunityQuestions = (
  state: ApplicationState,
): QuestionsWithAnswersByCategory | undefined =>
  state.activeOpportunity.questionnaire;

export const selectActiveOpportunityState = (
  state: ApplicationState,
): ActiveOpportunityState => state.activeOpportunity;

export const selectActiveOpportunityAnswers = (
  state: ApplicationState,
): OpportunityAnswer[] => state.activeOpportunity.opportunityAnswers;
