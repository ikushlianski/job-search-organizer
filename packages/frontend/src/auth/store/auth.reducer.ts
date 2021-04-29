import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { checkIsLoggedIn, signInAction, signUpAction } from './auth.action';
import { Auth } from '../auth.interface';

export const authSlice = createSlice<Auth, SliceCaseReducers<Auth>>({
  name: 'auth',
  initialState: {
    email: null,
    accessToken: null,
    authenticated: true,
    authenticationMessage: null,
  },
  reducers: {
    setAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
    clearAuthMessage: (state) => {
      state.authenticationMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkIsLoggedIn.fulfilled, (state, action) => {
        state.authenticated = true;
        state.accessToken = action.payload;
      })

      .addCase(checkIsLoggedIn.rejected, (state) => {
        state.authenticated = false;
        state.accessToken = null;
      })

      .addCase(signInAction.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.accessToken = payload;
      })

      .addCase(signInAction.rejected, (state) => {
        state.authenticated = false;
      })

      .addCase(signUpAction.fulfilled, (state, action) => {
        state.authenticated = true;
        state.accessToken = action.payload.accessToken;
      })

      .addCase(signUpAction.rejected, (state, action) => {
        state.authenticated = false;
        state.accessToken = null;
        state.authenticationMessage = action.payload?.authenticationMessage;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, clearAuthMessage } = authSlice.actions;

export const authReducer = authSlice.reducer;
