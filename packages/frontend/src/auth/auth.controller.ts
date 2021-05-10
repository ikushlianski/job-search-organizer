import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsLoggedIn } from './store/auth.action';
import { authService } from './auth.service';
import { isSignedIn } from './store/auth.selector';
import { setAuthenticated } from './store/auth.reducer';
import { AuthProps } from '../common/types/auth-props.interface';

interface Props {
  render: (authProps: AuthProps) => React.ReactElement;
}

export const AuthController: React.FC<Props> = ({ render }) => {
  const signedIn = useSelector(isSignedIn);
  const dispatch = useDispatch();

  const onSignOut = () => {
    authService.removeTokenFromLS();
  };

  React.useEffect(() => {
    const accessToken = authService.getToken();

    if (!accessToken) {
      dispatch(setAuthenticated(false));

      return;
    }

    if (accessToken) {
      dispatch(checkIsLoggedIn(accessToken));
    }
  }, [dispatch]);

  return render({ signedIn, onSignOut });
};
