import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Routing } from './routing.enum';
import { IterationPage } from '../entities/iteration/ui/iteration.page';
import { OpportunityPage } from '../entities/opportunity/opportunity.page';
import { SignUpPage } from '../auth/ui/pages/signup.page';
import { DashboardPage } from '../entities/dashboard/dashboard.page';
import { SignInPage } from '../auth/ui/pages/signin.page';
import { NotFoundPage } from '../common/pages/not-found.page';
import { SuggestPage } from '../entities/suggest/suggest.page';

interface Props {
  signedIn: boolean;
}

export const Routes: React.FC<Props> = ({ signedIn }) => {
  console.log('signedIn in Routes', signedIn);

  return (
    <Router>
      {signedIn ? (
        <Switch>
          <Route exact path={Routing.home}>
            <DashboardPage />
          </Route>
          <Route path={Routing.iterations}>
            <IterationPage />
          </Route>
          <Route path={Routing.opportunities}>
            <OpportunityPage />
          </Route>
          <Route exact path={Routing.signUp}>
            <Redirect to={Routing.home} />
          </Route>
          <Route exact path={Routing.signIn}>
            <Redirect to={Routing.home} />
          </Route>
          <Route path={Routing.catchAll}>
            <NotFoundPage />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path={Routing.signUp}>
            <SignUpPage />
          </Route>
          <Route exact path={Routing.signIn}>
            <SignInPage />
          </Route>
          <Route exact path={Routing.suggest}>
            <SuggestPage />
          </Route>
          <Route path={Routing.catchAll}>
            <Redirect to={Routing.signIn} />
          </Route>
        </Switch>
      )}
    </Router>
  );
};
