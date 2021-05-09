import React from 'react';
import { SingleOppController } from '../controllers/single-opp.controller';
import { OpportunityAnswersForm } from '../components/opp-answers-form.component';

import '../../../common/pages/page.scss';
import { Loader } from '../../../common/components/loader.component';

export const OpportunityAnswersPage: React.FC = () => {
  return (
    <SingleOppController
      render={(props) => {
        return props.loading ? (
          <Loader />
        ) : (
          <div className="Page OpportunityAnswersPage">
            <OpportunityAnswersForm {...props} />
          </div>
        );
      }}
    />
  );
};
