import { createAsyncThunk } from '@reduxjs/toolkit';
import { IterationState } from '../iteration.interface';
import { iterationApiService } from '../../../api-client/services/iteration-api.service';

export const getMyIterations = createAsyncThunk<
  IterationState,
  string, // token
  {
    rejectValue: IterationState;
  }
>(
  'iteration/getMine',
  // same params as in sign in
  async (accessToken, { rejectWithValue }) => {
    const iterationState = await iterationApiService.getMine(accessToken);

    if (iterationState.hasError) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: 'Could not fetch iterations',
        iterations: [],
        hasError: true,
      });
    }

    return iterationState;
  },
);
