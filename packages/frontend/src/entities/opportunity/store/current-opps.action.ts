import { createAsyncThunk } from '@reduxjs/toolkit';
import { opportunityApiService } from '../../../api-client/services/opportunity-api.service';
import { OpportunityListState } from '../opportunity.interface';

export const getMyCurrentOpportunitiesAction = createAsyncThunk<
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
