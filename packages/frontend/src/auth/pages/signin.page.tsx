import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../routes/routing.enum';

export const SignInPage: React.FC = () => {
  return (
    <div>
      <p>This is SIGN-IN page</p>
      <Link to={Routing.signUp}>Don't have an account?</Link>
    </div>
  );
};
