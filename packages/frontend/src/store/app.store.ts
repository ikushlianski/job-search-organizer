import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../app/store/app.reducer';
import { authReducer } from '../auth/store/auth.reducer';
import { iterationReducer } from '../entities/iteration/store/iteration.reducer';
import { currentOppsReducer } from '../entities/opportunity/store/current-opps.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    iteration: iterationReducer,
    opportunityCurrent: currentOppsReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
