import React from 'react';
import { Routes } from '../routes/routes.controller';
import { AuthController } from '../auth/auth.controller';

export const AppComponent = (): React.ReactElement => {
  return (
    <AuthController
      render={(signedIn: boolean) => <Routes signedIn={signedIn} />}
    />
  );
};
