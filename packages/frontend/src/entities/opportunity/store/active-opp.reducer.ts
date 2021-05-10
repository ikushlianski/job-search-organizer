import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { ActiveOpportunityState } from '../active-opp.interface';
import { fetchMyCurrentIterationSettings } from '../../iteration/store/iteration.action';
import { recordAnswer } from './active-opp.action';
import { fetchOpportunityAnswers } from './current-opps.action';

export const activeOpportunitySlice = createSlice<
  ActiveOpportunityState,
  SliceCaseReducers<ActiveOpportunityState>
>({
  name: 'activeOpportunity',
  initialState: {
    loading: false,
    loaded: false,
    hasError: false,
    message: '',
    opportunityAnswers: [],
  },
  reducers: {
    setActiveOpportunityId(state, { payload }) {
      state.activeOpportunityId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recordAnswer.fulfilled, (state, { payload }) => {
        state.loaded = true;
        state.loading = false;
        state.message = '';
        state.hasError = false;
      })
      .addCase(recordAnswer.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      })
      .addCase(
        fetchMyCurrentIterationSettings.fulfilled,
        (state, { payload }) => {
          state.loaded = true;
          state.loading = false;
          state.questionnaire = payload.questionsWithAnswersByCat;
          state.hasError = Object.keys(payload.iterationSettings).length > 0;
          state.message = '';
        },
      )
      .addCase(fetchMyCurrentIterationSettings.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      })
      .addCase(fetchOpportunityAnswers.fulfilled, (state, { payload }) => {
        state.loaded = true;
        state.loading = false;
        state.opportunityAnswers = payload;
        state.hasError = false;
        state.message = '';
      })
      .addCase(fetchOpportunityAnswers.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setActiveOpportunityId } = activeOpportunitySlice.actions;

export const activeOpportunityReducer = activeOpportunitySlice.reducer;
