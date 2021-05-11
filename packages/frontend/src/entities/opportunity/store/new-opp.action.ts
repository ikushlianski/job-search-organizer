import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { opportunityApiService } from '../../../api-client/services/opportunity-api.service';

export const createNewOpportunity = createAsyncThunk<
  number, // id of created opportunity
  { accessToken: string; iterationId: number }, // accessToken
  {
    rejectValue: LoadingProps;
  }
>(
  'opportunity/createNew',
  async ({ accessToken, iterationId }, { rejectWithValue }) => {
    try {
      return await opportunityApiService.createNew({
        accessToken,
        iterationId,
      });
    } catch (e) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: `Could not create new opportunity`,
        hasError: true,
      });
    }
  },
);
