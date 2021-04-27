import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../app/store/app.reducer';
import { authReducer } from '../auth/store/auth.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
