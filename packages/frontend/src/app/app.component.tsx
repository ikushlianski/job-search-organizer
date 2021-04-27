import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../routes/routes.controller';
import { AuthController } from '../auth/auth.controller';
import { isLoading } from './app.selector';

export const App = (): React.ReactElement => {
  const loading = useSelector(isLoading);

  return (
    <>
      <AuthController
        render={(signedIn: boolean) => <Routes signedIn={signedIn} />}
      />
      {loading && <div>LOADING!!!!!!!!!!!!</div>}
    </>
  );
};
