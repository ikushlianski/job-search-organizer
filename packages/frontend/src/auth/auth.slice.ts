import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { checkIsLoggedIn } from './auth.action';
import { Auth } from './auth.interface';

export const authSlice = createSlice<Auth, SliceCaseReducers<Auth>>({
  name: 'auth',
  initialState: {
    email: '',
    accessToken: '',
    authenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkIsLoggedIn.fulfilled, (state) => {
        state.authenticated = true;
      })
      .addCase(checkIsLoggedIn.rejected, (state) => {
        state.authenticated = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = authSlice.actions;

export const authReducer = authSlice.reducer;
