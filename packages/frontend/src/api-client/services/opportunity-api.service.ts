import { client } from '../http-client';
import {
  OpportunityAnswer,
  CreateOpportunityDto,
  OpportunityItemState,
  OpportunityListState,
} from '../../entities/opportunity/current-opps.interface';
import { QuestionsWithAnswersByCategory } from '../../entities/question/question.interface';
import { SavedOppAnswersResponse } from '../../entities/opportunity/active-opp.interface';

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
      // temp
      company_name: result.data.company_name,
      project_name: result.data.project_name,
      contact_person_name: result.data.contact_person_name,
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

  async createNew({
    accessToken,
    iterationId,
  }: {
    accessToken: string;
    iterationId: number;
  }): Promise<number> {
    const result = await client<number>({
      url: `/current-opportunities`,
      method: 'post',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      data: {
        iterationId,
      },
    });

    return result.data;
  },

  async getOpportunityAnswers(
    accessToken: string,
    opportunityId: number,
  ): Promise<OpportunityAnswer[]> {
    const result = await client<OpportunityAnswer[]>({
      url: `/opportunities/${opportunityId}/qa`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return result.data;
  },

  async recordAnswer(
    accessToken: string,
    opportunityId: number,
    data: OpportunityAnswer[],
  ): Promise<SavedOppAnswersResponse> {
    const result = await client<SavedOppAnswersResponse>({
      url: `/opportunities/${opportunityId}/qa`,
      method: 'post',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      data,
    });

    return result.data;
  },

  async updateOne({
    accessToken,
    opportunityId,
    iterationId,
    data,
  }: {
    accessToken: string;
    iterationId: number;
    opportunityId: number;
    data: CreateOpportunityDto;
  }): Promise<CreateOpportunityDto> {
    const result = await client<CreateOpportunityDto>({
      url: `iterations/${iterationId}/opportunities/${opportunityId}/`,
      method: 'patch',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      data,
    });

    return result.data;
  },
};
