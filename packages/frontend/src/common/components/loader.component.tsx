import React from 'react';
import { Spinner } from 'evergreen-ui';

// page-level or app level loader
export const PageLoader = (): React.ReactElement => {
  const centeredStyle = {
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties;

  return (
    <div style={centeredStyle}>
      <Spinner />
    </div>
  );
};
