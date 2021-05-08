import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../../routes/routing.enum';
import { SignInForm } from '../components/sign-in-form.component';

import '../../../common/pages/page.scss';

export const SignInPage: React.FC = () => {
  return (
    <div className="Page SignInPage">
      <p>Sign in</p>
      <SignInForm />
      <Link to={Routing.signUp}>Don't have an account?</Link>
    </div>
  );
};
