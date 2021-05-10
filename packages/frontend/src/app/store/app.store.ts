import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app.reducer';
import { authReducer } from '../../auth/store/auth.reducer';
import { iterationReducer } from '../../entities/iteration/store/iteration.reducer';
import { currentOppsReducer } from '../../entities/opportunity/store/current-opps.reducer';
import { newOpportunityReducer } from '../../entities/opportunity/store/new-opp.reducer';
import { companyReducer } from '../../entities/company/store/company.reducer';
import { activeOpportunityReducer } from '../../entities/opportunity/store/active-opp.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,

    app: appReducer,

    iteration: iterationReducer,

    // opportunities
    currentOpportunities: currentOppsReducer,
    newOpportunity: newOpportunityReducer,
    activeOpportunity: activeOpportunityReducer,

    company: companyReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
