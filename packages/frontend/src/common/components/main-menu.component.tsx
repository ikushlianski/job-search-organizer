import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routing } from '../../routes/routing.enum';
import { MenuItem } from './menu-item.component';
import { AuthProps } from '../types/auth-props.interface';

import './main-menu.scss';

export const MainMenu: React.FC<AuthProps> = ({ signedIn, onSignOut }) => {
  return (
    <div className="MainMenu">
      <div className="MainMenu__Logo">Job Search Organizer</div>
      <div className="MainMenu__Buttons">
        <MenuItem>
          <NavLink
            exact
            to={`${Routing.createOpportunity}?token=${process.env.TEMP_TOKEN}`}
          >
            {signedIn ? `Create opportunity` : `Suggest opportunity`}
          </NavLink>
        </MenuItem>

        {signedIn && (
          <MenuItem>
            <NavLink exact to={Routing.home}>
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
              Sign In/Sign Up
            </NavLink>
          </MenuItem>
        )}
      </div>
    </div>
  );
};
