import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../routes/routes.controller';
import { AuthController } from '../../../auth/auth.controller';
import { isLoading } from '../../store/app.selector';
import { Loader } from '../../../common/components/loader.component';
import './app.scss';

export const App = (): React.ReactElement => {
  const loading = useSelector(isLoading);

  return (
    <>
      <AuthController
        render={({ signedIn, onSignOut }) => (
          <Routes signedIn={signedIn} onSignOut={onSignOut} />
        )}
      />
      {loading && <Loader />}
    </>
  );
};
