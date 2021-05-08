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
import { SignInPage } from '../auth/ui/pages/signin.page';
import { NotFoundPage } from '../common/pages/not-found.page';
import { CurrentOpportunitiesPage } from '../entities/opportunity/opportunities-current/pages/current-opps.page';
import { Layout } from '../common/components/layout.component';
import { SingleOpportunityDetailsPage } from '../entities/opportunity/opportunities-current/pages/single-opp.page';
import { AuthContext } from '../auth/auth.context';
import { CreateOpportunityPage } from '../entities/opportunity/new-opportunity/pages/create-opp.page';

interface Props {
  onSignOut: () => void;
}

export const Routes: React.FC<Props> = ({ onSignOut }) => {
  const signedIn = React.useContext(AuthContext);

  return (
    <Router>
      <Layout signedIn={signedIn} onSignOut={onSignOut}>
        {signedIn ? (
          <Switch>
            <Route exact path={Routing.home}>
              <CurrentOpportunitiesPage />
            </Route>
            <Route exact path={Routing.iterations}>
              <IterationsPage />
            </Route>
            <Route exact path={Routing.currentOpportunities}>
              <CurrentOpportunitiesPage />
            </Route>
            <Route exact path={Routing.singleOpportunityDetails}>
              <SingleOpportunityDetailsPage />
            </Route>
            <Route exact path={Routing.signUp}>
              <Redirect to={Routing.home} />
            </Route>
            <Route exact path={Routing.signIn}>
              <Redirect to={Routing.home} />
            </Route>
            <Route exact path={Routing.createOpportunity}>
              <CreateOpportunityPage />
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
            <Route exact path={Routing.singleOpportunityDetails}>
              <SingleOpportunityDetailsPage />
            </Route>
            <Route exact path={Routing.createOpportunity}>
              <CreateOpportunityPage />
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
