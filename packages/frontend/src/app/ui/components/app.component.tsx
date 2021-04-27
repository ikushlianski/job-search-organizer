import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../routes/routes.controller';
import { AuthController } from '../../../auth/auth.controller';
import { isLoading } from '../../store/app.selector';

export const App = (): React.ReactElement => {
  const loading = useSelector(isLoading);

  const centeredStyle = {
    position: 'fixed',
    display: 'flex',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties;

  return (
    <>
      <AuthController
        render={(signedIn: boolean) => <Routes signedIn={signedIn} />}
      />
      {loading && <div style={centeredStyle}>LOADING!!!!!!!!!!!!</div>}
    </>
  );
};
