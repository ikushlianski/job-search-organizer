import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { NewOpportunityState } from '../new-opp.interface';
import { fetchQuestionsWithAnswers } from './new-opp.action';

export const currentOpportunitiesSlice = createSlice<
  NewOpportunityState,
  SliceCaseReducers<NewOpportunityState>
>({
  name: 'newOpportunity',
  initialState: {
    loading: false,
    loaded: false,
    hasError: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsWithAnswers.fulfilled, (state, { payload }) => {
        state.questionsByCategory = payload.questionsByCategory;

        state.loaded = payload.loaded;
        state.loading = payload.loading;
        state.message = payload.message;
        state.hasError = payload.hasError;
      })
      .addCase(fetchQuestionsWithAnswers.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = currentOpportunitiesSlice.actions;

export const newOpportunityReducer = currentOpportunitiesSlice.reducer;
