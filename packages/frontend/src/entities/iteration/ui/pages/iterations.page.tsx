import React from 'react';
import { IterationController } from '../../iteration.controller';
import { IterationTable } from '../components/iteration-table.component';
import { GlobalInfoText } from '../../../../common/components/global-info-text.component';
import { Button } from 'evergreen-ui';

import './iterations.scss';
import { PageLoader } from '../../../../common/components/loader.component';

export const IterationsPage: React.FC = () => {
  return (
    <IterationController
      render={({ iterations, onIterationStart, loading }) => {
        return loading ? (
          <PageLoader />
        ) : (
          <div className="Page IterationsPage">
            {iterations.length > 0 ? (
              <IterationTable iterations={iterations} />
            ) : (
              <div className="IterationsPage__GlobalMessage">
                <GlobalInfoText text={"You don't have any iterations yet"} />
                <Button onClick={onIterationStart}>Start Iteration</Button>
              </div>
            )}
          </div>
        );
      }}
    />
  );
};
