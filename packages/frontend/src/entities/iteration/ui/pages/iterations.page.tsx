import React from 'react';
import { IterationController } from '../../iteration.controller';
import { IterationTable } from '../components/iteration-table.component';
import { GlobalInfoText } from '../../../../common/components/global-info-text.component';
import { Button } from 'evergreen-ui';

import './iterations.scss';

export const IterationsPage: React.FC = () => {
  return (
    <IterationController
      render={({ iterations, onIterationStart }) => {
        return (
          <div className="IterationsPage">
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
