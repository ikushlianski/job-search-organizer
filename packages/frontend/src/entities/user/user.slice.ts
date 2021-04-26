import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { User } from './user.interface';

export const userSlice = createSlice<User, SliceCaseReducers<User>>({
  name: 'user',
  initialState: {
    email: '',
    accessToken: '',
  },
  reducers: {
    signInStart: () => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    signInSuccess: () => {
      // something
    },
    signInFailure: () => {
      // something here
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export const userReducer = userSlice.reducer;
