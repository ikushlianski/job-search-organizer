import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routing } from '../../routes/routing.enum';
import { MenuItem } from './menu-item.component';
import { AuthProps } from '../types/auth-props.interface';

import './main-menu.scss';

export const MainMenu: React.FC<AuthProps> = ({ signedIn, onSignOut }) => {
  if (!signedIn) return null;

  return (
    <div className="MainMenu">
      {signedIn && (
        <MenuItem>
          <NavLink exact to={Routing.home}>
            Dashboard
          </NavLink>
        </MenuItem>
      )}

      {signedIn && (
        <MenuItem>
          <NavLink exact to={Routing.currentOpportunities}>
            My opportunities
          </NavLink>
        </MenuItem>
      )}

      {signedIn && (
        <MenuItem>
          <NavLink exact to={Routing.iterations}>
            Iterations
          </NavLink>
        </MenuItem>
      )}

      {signedIn ? (
        <MenuItem>
          <a href="" onClick={onSignOut}>
            Sign Out
          </a>
        </MenuItem>
      ) : (
        <MenuItem>
          <NavLink exact to={Routing.signIn}>
            Sign In
          </NavLink>
        </MenuItem>
      )}
    </div>
  );
};
