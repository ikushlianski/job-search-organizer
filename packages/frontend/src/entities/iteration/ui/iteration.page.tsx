import React from 'react';
import { IterationController } from '../iteration.controller';
import { Iteration } from '../iteration.interface';
import { IterationTable } from './iteration-table.component';

export const IterationPage: React.FC = () => {
  return (
    <IterationController
      render={(iterations: Iteration[]) => {
        return <IterationTable iterations={iterations} />;
      }}
    />
  );
};
