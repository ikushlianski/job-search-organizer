import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { opportunityApiService } from '../../../api-client/services/opportunity-api.service';

export const recordAnswer = createAsyncThunk<
  number, // score coming from BE after this answer is submitted
  { accessToken: string; opportunityId: number }, // accessToken
  {
    rejectValue: LoadingProps;
  }
>(
  'opportunity/recordAnswer',
  async ({ accessToken, opportunityId }, { rejectWithValue }) => {
    try {
      return await opportunityApiService.recordAnswer(
        accessToken,
        opportunityId,
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
