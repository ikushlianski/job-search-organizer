import React from 'react';
import { OpportunitiesTable } from '../components/opps-table.component';
import { CurrentOppsController } from '../../controllers/current-opps.controller';
import { Loader } from '../../../../common/components/loader.component';

export const CurrentOpportunitiesPage: React.FC = () => {
  return (
    <CurrentOppsController
      render={({ loading, opportunities }) => {
        return loading ? (
          <Loader />
        ) : (
          <div>
            <h2>Opportunities from your current iteration</h2>
            <OpportunitiesTable opportunities={opportunities} />
          </div>
        );
      }}
    />
  );
};
