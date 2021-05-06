import { client } from '../http-client';
import {
  OpportunityItemState,
  OpportunityListState,
} from '../../entities/opportunity/opportunity.interface';
import { LoadingProps } from '../../common/types/loading-props.interface';

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
    opportunityId: number,
  ): Promise<OpportunityItemState | LoadingProps> {
    try {
      const result = await client<OpportunityItemState>({
        url: `/opportunity/${opportunityId}`,
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
    } catch (e) {
      return {
        loaded: true,
        loading: false,
        message: `Could not fetch opportunity details for opportunity with id ${opportunityId}`,
        hasError: true,
      };
    }
  },
};
