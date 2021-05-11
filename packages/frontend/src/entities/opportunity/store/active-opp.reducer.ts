import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { ActiveOpportunityState } from '../active-opp.interface';
import { fetchMyCurrentIterationSettings } from '../../iteration/store/iteration.action';
import { recordAnswer } from './active-opp.action';
import {
  fetchOpportunityAnswers,
  fetchOpportunityDetails,
} from './current-opps.action';
import { updateOpportunityDetails } from './new-opp.action';

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
    score: 0,
    opportunityAnswers: [],
  },
  reducers: {
    setActiveOpportunityId(state, { payload }) {
      state.activeOpportunityId = payload;
    },
    setCompanyName(state, { payload }) {
      state.company_name = payload;
    },
    setProjectName(state, { payload }) {
      state.project_name = payload;
    },
    setContactName(state, { payload }) {
      state.contact_person_name = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recordAnswer.fulfilled, (state, { payload }) => {
        state.loaded = true;
        state.loading = false;
        state.message = '';
        state.hasError = false;
        state.opportunityAnswers.push(...payload.answers);
        state.score = payload.score;
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
      })

      .addCase(updateOpportunityDetails.fulfilled, (state, { payload }) => {
        state.loaded = true;
        state.loading = false;
        state.hasError = false;
        state.message = '';

        if (payload.contact_person_name)
          state.contact_person_name = payload.contact_person_name;

        if (payload.project_name) state.project_name = payload.project_name;

        if (payload.company_name) state.company_name = payload.company_name;
      })
      .addCase(updateOpportunityDetails.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      })

      .addCase(fetchOpportunityDetails.fulfilled, (state, { payload }) => {
        state.loaded = true;
        state.loading = false;
        state.company_name = payload.company_name;
        state.contact_person_name = payload.contact_person_name;
        state.project_name = payload.project_name;
        state.hasError = false;
        state.message = '';
      })
      .addCase(fetchOpportunityDetails.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveOpportunityId,
  setCompanyName,
  setProjectName,
  setContactName,
} = activeOpportunitySlice.actions;

export const activeOpportunityReducer = activeOpportunitySlice.reducer;
