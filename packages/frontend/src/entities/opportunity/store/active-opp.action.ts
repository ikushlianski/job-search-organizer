import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { opportunityApiService } from '../../../api-client/services/opportunity-api.service';
import { OpportunityAnswer } from '../current-opps.interface';
import { SavedOppAnswersResponse } from '../active-opp.interface';

export const recordAnswer = createAsyncThunk<
  SavedOppAnswersResponse, // score coming from BE after this answer is submitted
  {
    accessToken: string;
    opportunityId: number;
    data: OpportunityAnswer[];
  },
  {
    rejectValue: LoadingProps;
  }
>(
  'opportunity/recordAnswer',
  async ({ accessToken, opportunityId, data }, { rejectWithValue }) => {
    try {
      return await opportunityApiService.recordAnswer(
        accessToken,
        opportunityId,
        data,
      );
    } catch (e) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: `Could not record the answer`,
        hasError: true,
      });
    }
  },
);
