import React from 'react';
import { MainMenu } from './main-menu.component';
import { AuthProps } from '../types/auth-props.interface';

import './layout.scss';
import { useSelector } from 'react-redux';
import { isLoading } from '../../app/store/app.selector';

interface Props extends AuthProps {
  children: React.ReactElement;
}

export const Layout: React.FC<Props> = ({ children, onSignOut, signedIn }) => {
  const loading = useSelector(isLoading);

  return (
    <div className="Layout">
      {!loading && <MainMenu onSignOut={onSignOut} signedIn={signedIn} />}
      {children}
      <div className="Layout__Footer">This is a footer</div>
    </div>
  );
};
