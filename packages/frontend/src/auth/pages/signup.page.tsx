import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../routes/routing.enum';

export const SignUpPage: React.FC = () => {
  return (
    <div>
      <p>This is SIGN-UP page</p>
      <Link to={Routing.signIn}>Already have an account?</Link>
    </div>
  );
};
