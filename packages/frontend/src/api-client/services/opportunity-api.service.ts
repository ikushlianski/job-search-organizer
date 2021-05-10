import { client } from '../http-client';
import {
  OpportunityItemState,
  OpportunityListState,
} from '../../entities/opportunity/current-opps.interface';
import { QuestionsWithAnswersByCategory } from '../../entities/question/question.interface';

export const opportunityApiService = {
  async getCurrentOpportunities(
    accessToken: string,
  ): Promise<OpportunityListState> {
    try {
      const result = await client<OpportunityItemState[]>({
        url: '/current-opportunities',
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return {
        loaded: true,
        loading: false,
        message: '',
        opportunities: result.data,
        hasError: false,
      };
    } catch (e) {
      return {
        loaded: true,
        loading: false,
        message: 'Could not fetch opportunities',
        opportunities: [],
        hasError: true,
      };
    }
  },
  async getOpportunityDetails(
    accessToken: string,
    iterationId: number,
    opportunityId: number,
  ): Promise<OpportunityItemState> {
    const result = await client<OpportunityItemState>({
      url: `/iterations/${iterationId}/opportunities/${opportunityId}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      loaded: true,
      loading: false,
      message: '',
      hasError: false,
      id: result.data.id,
      name: result.data.name,
      date: result.data.date,
      final_date: result.data.final_date,
      company: result.data.company,
      userOpportunityScore: result.data.userOpportunityScore,
      project: result.data.project,
      answers: result.data.answers,
    };
  },
  async getAllQuestions(
    accessToken: string,
  ): Promise<QuestionsWithAnswersByCategory> {
    const result = await client<QuestionsWithAnswersByCategory>({
      url: `/questions?byCategory=true&answers=true`,
      method: 'get',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    return result.data;
  },
  async createNew(accessToken: string): Promise<number> {
    const result = await client<number>({
      url: `/current-opportunities`,
      method: 'post',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    return result.data;
  },
};
