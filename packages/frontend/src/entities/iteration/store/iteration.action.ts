import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IterationListState,
  IterationSettingsWithAnswers,
} from '../iteration.interface';
import { iterationApiService } from '../../../api-client/services/iteration-api.service';

export const fetchMyIterations = createAsyncThunk<
  IterationListState,
  string, // token
  {
    rejectValue: IterationListState;
  }
>('iteration/getMine', async (accessToken, { rejectWithValue }) => {
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
});

export const fetchMyCurrentIterationSettings = createAsyncThunk<
  IterationSettingsWithAnswers,
  { accessToken: string; iterationId: number },
  {
    rejectValue: IterationListState;
  }
>(
  'iteration/getIterationSettings',
  async ({ accessToken, iterationId }, { rejectWithValue }) => {
    try {
      const iterationSettings = await iterationApiService.getIterationSettings(
        accessToken,
        iterationId,
      );

      return iterationSettings;
    } catch (e) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: 'Could not fetch iteration settings',
        iterations: [],
        hasError: true,
      });
    }
  },
);
