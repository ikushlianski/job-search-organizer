import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { IterationListState } from '../iteration.interface';
import {
  fetchMyCurrentIterationSettings,
  fetchMyIterations,
} from './iteration.action';

export const iterationSlice = createSlice<
  IterationListState,
  SliceCaseReducers<IterationListState>
>({
  name: 'iteration',
  initialState: {
    iterations: [],
    loading: false,
    loaded: false,
    hasError: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyIterations.pending, (state) => {
        state.loaded = false;
        state.loading = true;
      })
      .addCase(fetchMyIterations.fulfilled, (state, { payload }) => {
        state.iterations = payload.iterations;
        state.loaded = payload.loaded;
        state.message = payload.message;
        state.loading = payload.loading;
        state.hasError = payload.hasError;
        state.activeIterationId = payload.activeIterationId;
      })
      .addCase(fetchMyIterations.rejected, (state, action) => {
        state.iterations = [];
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      })
      .addCase(fetchMyCurrentIterationSettings.pending, (state) => {
        state.loaded = false;
        state.loading = true;
      })
      .addCase(
        fetchMyCurrentIterationSettings.fulfilled,
        (state, { payload }) => {
          state.loaded = payload.loaded;
          state.message = payload.message;
          state.loading = payload.loading;
          state.hasError = payload.hasError;
          state.activeIterationId = payload.activeIterationId;
          state.activeIterationSettings = payload.activeIterationSettings;
        },
      )
      .addCase(fetchMyCurrentIterationSettings.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = iterationSlice.actions;

export const iterationReducer = iterationSlice.reducer;
