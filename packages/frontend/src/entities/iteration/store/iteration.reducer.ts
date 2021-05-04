import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { IterationListState } from '../iteration.interface';
import { getMyIterationsAction } from './iteration.action';

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
      .addCase(getMyIterationsAction.pending, (state) => {
        state.loaded = false;
        state.loading = true;
      })
      .addCase(getMyIterationsAction.fulfilled, (state, { payload }) => {
        state.iterations = payload.iterations;
        state.loaded = payload.loaded;
        state.message = payload.message;
        state.loading = payload.loading;
        state.hasError = payload.hasError;
      })
      .addCase(getMyIterationsAction.rejected, (state, action) => {
        state.iterations = [];
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
