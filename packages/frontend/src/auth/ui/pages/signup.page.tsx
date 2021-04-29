import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../../routes/routing.enum';
import { SignUpForm } from '../components/sign-up-form.component';

export const SignUpPage: React.FC = () => {
  return (
    <div>
      <p>SIGN-UP page</p>
      <SignUpForm />
      <Link to={Routing.signIn}>I already have account</Link>
    </div>
  );
};
