import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../../routes/routing.enum';
import { SignUpForm } from '../components/sign-up-form.component';

import '../../../common/pages/page.scss';

export const SignUpPage: React.FC = () => {
  return (
    <div className="Page SignUpPage">
      <p>Hello, friend!</p>
      <p>Sign up</p>
      <SignUpForm />
      <Link to={Routing.signIn}>I already have account</Link>
    </div>
  );
};
