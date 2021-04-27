import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../app/app.reducer';
import { authReducer } from '../auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
