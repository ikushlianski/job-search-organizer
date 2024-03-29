import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../routes/routes.controller';
import { AuthController } from '../../../auth/auth.controller';
import { isLoading } from '../../store/app.selector';
import { PageLoader } from '../../../common/components/loader.component';
import { AuthContext } from '../../../auth/auth.context';

import './app.scss';

export const App = (): React.ReactElement => {
  const loading = useSelector(isLoading);

  return (
    <>
      <AuthController
        render={({ signedIn, onSignOut }) => (
          <AuthContext.Provider value={signedIn}>
            <Routes onSignOut={onSignOut} />
          </AuthContext.Provider>
        )}
      />
      {loading && <PageLoader />}
    </>
  );
};
