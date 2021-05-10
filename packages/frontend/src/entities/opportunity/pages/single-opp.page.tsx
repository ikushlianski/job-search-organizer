import React from 'react';
import { SingleOppController } from '../controllers/single-opp.controller';
import { OpportunityAnswersForm } from '../components/opp-answers-form.component';
import { Loader } from '../../../common/components/loader.component';

import '../../../common/pages/page.scss';

export const OpportunityAnswersPage: React.FC = () => {
  return (
    <SingleOppController
      render={(props) => {
        return (
          <div className="Page OpportunityAnswersPage">
            {props.loading ? <Loader /> : <OpportunityAnswersForm {...props} />}
          </div>
        );
      }}
    />
  );
};
