import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../app/store/app.reducer';
import { authReducer } from '../auth/store/auth.reducer';
import { iterationReducer } from '../entities/iteration/store/iteration.reducer';
import { currentOppsReducer } from '../entities/opportunity/opportunities-current/store/current-opps.reducer';
import { newOpportunityReducer } from '../entities/opportunity/new-opportunity/store/new-opp.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    iteration: iterationReducer,
    currentOpportunities: currentOppsReducer,
    newOpportunity: newOpportunityReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
