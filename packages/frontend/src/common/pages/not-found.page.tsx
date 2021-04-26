import React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from '../../routes/routing.enum';

export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <p>Page not found</p>
      <p>
        <Link to={Routing.signIn}>Sign in</Link>
      </p>
    </div>
  );
};
