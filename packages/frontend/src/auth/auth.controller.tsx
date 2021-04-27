import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppLoading } from '../app/app.reducer';
import { checkIsLoggedIn } from './auth.action';
import { authService } from './auth.service';
import { isSignedIn } from './auth.selector';

interface Props {
  render: (signedIn: boolean) => JSX.Element;
}

export const AuthController: React.FC<Props> = ({ render }) => {
  const signedIn = useSelector(isSignedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const accessToken = authService.getToken();

    console.log('accessToken in LS', accessToken);

    dispatch(setAppLoading(true));

    if (accessToken) {
      dispatch(checkIsLoggedIn(accessToken));
    }
  }, []);

  return render(signedIn);
};
