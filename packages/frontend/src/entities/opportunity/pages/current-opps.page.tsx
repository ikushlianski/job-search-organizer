import React from 'react';
import { OpportunitiesTable } from '../components/opps-table.component';
import { CurrentOppsController } from '../controllers/current-opps.controller';
import { Loader } from '../../../common/components/loader.component';

import '../../../common/pages/page.scss';

export const CurrentOpportunitiesPage: React.FC = () => {
  return (
    <CurrentOppsController
      render={({ loading, opportunities }) => {
        return (
          <div className="Page CurrentOpportunitiesPage">
            {loading ? (
              <Loader />
            ) : (
              <>
                <h2>Opportunities from your current iteration</h2>
                <OpportunitiesTable opportunities={opportunities} />
              </>
            )}
          </div>
        );
      }}
    />
  );
};
