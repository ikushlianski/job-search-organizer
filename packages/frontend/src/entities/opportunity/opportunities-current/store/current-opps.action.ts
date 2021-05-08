import { createAsyncThunk } from '@reduxjs/toolkit';
import { opportunityApiService } from '../../../../api-client/services/opportunity-api.service';
import {
  OpportunityItemState,
  OpportunityListState,
} from '../current-opps.interface';
import { LoadingProps } from '../../../../common/types/loading-props.interface';

export const getMyCurrentOpportunities = createAsyncThunk<
  OpportunityListState,
  string, // token
  {
    rejectValue: OpportunityListState;
  }
>('current-opportunities/getMine', async (accessToken, { rejectWithValue }) => {
  const currentOppsState = await opportunityApiService.getCurrentOpportunities(
    accessToken,
  );

  if (currentOppsState.hasError) {
    return rejectWithValue({
      loaded: true,
      loading: false,
      message: 'Could not fetch current opportunities',
      opportunities: [],
      hasError: true,
    });
  }

  return currentOppsState;
});

export const getOpportunityDetails = createAsyncThunk<
  OpportunityItemState,
  { accessToken: string; opportunityId: number; iterationId: number },
  {
    rejectValue: LoadingProps;
  }
>(
  'opportunity/getOne',
  async ({ accessToken, opportunityId, iterationId }, { rejectWithValue }) => {
    try {
      return await opportunityApiService.getOpportunityDetails(
        accessToken,
        iterationId,
        opportunityId,
      );
    } catch (e) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: `Could not fetch opportunity with id ${opportunityId}`,
        hasError: true,
      });
    }
  },
);
