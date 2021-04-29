import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { IterationState } from '../iteration.interface';
import { getMyIterations } from './iteration.action';

export const iterationSlice = createSlice<
  IterationState,
  SliceCaseReducers<IterationState>
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
      .addCase(getMyIterations.pending, (state) => {
        state.loaded = false;
        state.loading = true;
      })
      .addCase(
        getMyIterations.fulfilled,
        (
          state,
          { payload: { iterations, loaded, message, loading, hasError } },
        ) => {
          state.iterations = iterations;
          state.loaded = loaded;
          state.message = message;
          state.loading = loading;
          state.hasError = hasError;
        },
      )
      .addCase(getMyIterations.rejected, (state, action) => {
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
