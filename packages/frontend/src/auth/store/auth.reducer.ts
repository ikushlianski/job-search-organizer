import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { checkIsLoggedIn, signInAction } from './auth.action';
import { Auth } from '../auth.interface';

export const authSlice = createSlice<Auth, SliceCaseReducers<Auth>>({
  name: 'auth',
  initialState: {
    accessToken: '',
    authenticated: true,
  },
  reducers: {
    setAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkIsLoggedIn.fulfilled, (state) => {
        state.authenticated = true;
      })
      .addCase(checkIsLoggedIn.rejected, (state) => {
        state.authenticated = false;
      })
      .addCase(signInAction.fulfilled, (state, { payload }) => {
        console.log('payload when auth is FULFILLED', payload);
        state.authenticated = true;
        state.accessToken = payload;
      })
      .addCase(signInAction.rejected, (state, action) => {
        console.log('action when auth is rejected', action);
        state.authenticated = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  setAuthenticated,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
