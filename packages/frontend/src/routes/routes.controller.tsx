import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Routing } from './routing.enum';
import { IterationsPage } from '../entities/iteration/ui/pages/iterations.page';
import { SignUpPage } from '../auth/ui/pages/signup.page';
import { DashboardPage } from '../entities/dashboard/dashboard.page';
import { SignInPage } from '../auth/ui/pages/signin.page';
import { NotFoundPage } from '../common/pages/not-found.page';
import { SuggestPage } from '../entities/suggest/suggest.page';
import { CurrentOpportunitiesPage } from '../entities/opportunity/ui/pages/current-opps.page';
import { Layout } from '../common/components/layout.component';

interface Props {
  signedIn: boolean;
  onSignOut: () => void;
}

export const Routes: React.FC<Props> = ({ signedIn, onSignOut }) => {
  return (
    <Router>
      <Layout signedIn={signedIn} onSignOut={onSignOut}>
        {signedIn ? (
          <Switch>
            <Route exact path={Routing.home}>
              <DashboardPage />
            </Route>
            <Route exact path={Routing.iterations}>
              <IterationsPage />
            </Route>
            {/*<Route exact path={Routing.iterationDetails}>*/}
            {/*  <IterationDetailsPage />*/}
            {/*</Route>*/}
            {/*<Route exact path={Routing.opportunitiesByIteration}>*/}
            {/*  <OpportunitiesByIterationPage />*/}
            {/*</Route>*/}
            <Route exact path={Routing.currentOpportunities}>
              <CurrentOpportunitiesPage />
            </Route>
            <Route exact path={Routing.singleOpportunityDetails}>
              {/*<SingleOpportunityDetailsPage />*/}
              <div>HEEEEEEEE</div>
            </Route>
            {/*<Route exact path={Routing.interviews}>*/}
            {/*  <InterviewsPage />*/}
            {/*</Route>*/}
            <Route exact path={Routing.signUp}>
              <Redirect to={Routing.home} />
            </Route>
            <Route exact path={Routing.signIn}>
              <Redirect to={Routing.home} />
            </Route>
            <Route exact path={Routing.suggest}>
              <SuggestPage />
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
      </Layout>
    </Router>
  );
};
