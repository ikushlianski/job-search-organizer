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
      {<MainMenu onSignOut={onSignOut} signedIn={signedIn} />}
      {children}
      <div className="Layout__Footer">
        <p className="Footer__Author">By Ilya Kushlianski</p>
        <div className="Footer__Links">
          <a className="Footer__Link" href="https://ilya.online">
            ilya.online
          </a>
          {'  '}
          <a className="Footer__Link" href="https://github.com/ikushlianski">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
