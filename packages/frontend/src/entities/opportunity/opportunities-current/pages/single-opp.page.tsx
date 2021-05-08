import React from 'react';
import { Loader } from '../../../../common/components/loader.component';
import { SingleOppController } from '../controllers/single-opp.controller';

import '../../../../common/pages/page.scss';

export const SingleOpportunityDetailsPage: React.FC = () => {
  return (
    <SingleOppController
      render={({ loading, opportunityDetails }) => {
        return loading ? (
          <Loader />
        ) : (
          <div className="Page OpportunityAnswersPage">
            <h2>
              {opportunityDetails?.name || opportunityDetails?.project?.name}
            </h2>
            <p>Company: {opportunityDetails?.company?.name || 'N/A'}</p>
            <p>
              Desirable time to join project:{' '}
              {opportunityDetails?.date || 'N/A'}
            </p>
            <p>
              Deadline to join project:{' '}
              {opportunityDetails?.final_date || 'N/A'}
            </p>
          </div>
        );
      }}
    />
  );
};
