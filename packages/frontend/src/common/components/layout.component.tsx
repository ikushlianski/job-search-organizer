import React from 'react';
import { MainMenu } from './main-menu.component';
import { AuthProps } from '../types/auth-props.interface';

import './layout.scss';

interface Props extends AuthProps {
  children: React.ReactElement;
}

export const Layout: React.FC<Props> = ({ children, onSignOut, signedIn }) => {
  return (
    <div className="Layout">
      <MainMenu onSignOut={onSignOut} signedIn={signedIn} />
      {children}
      <div className="Layout__Footer">This is a footer</div>
    </div>
  );
};
