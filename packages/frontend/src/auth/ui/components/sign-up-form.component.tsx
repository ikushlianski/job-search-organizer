import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../store/auth.action';
import { ApplicationState } from '../../../app/store/app.store';
import { clearAuthMessage } from '../../store/auth.reducer';

export const SignUpForm = (): React.ReactElement => {
  const [email, setEmail] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [showPasswordMismatch, setShowPasswordMismatch] = React.useState(false);
  const [signUpAttempts, incrementSignUpAttempts] = React.useState(0);

  const authMessage = useSelector(
    (state: ApplicationState) => state.auth.authenticationMessage,
  );

  const hasAuthMessage = Boolean(authMessage);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onPassword1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword1(event.target.value);
  };

  const onPassword2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword2(event.target.value);
  };

  const dispatch = useDispatch();

  const signUpSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(clearAuthMessage(null));

    const passwordsValid = password1 && password2 && password1 === password2;

    incrementSignUpAttempts((count) => count + 1);

    if (email && passwordsValid) {
      dispatch(signUpAction({ email, password: password1 }));
    }
  };

  React.useEffect(() => {
    const isPasswordMismatch = Boolean(
      password1 !== password2 && signUpAttempts > 0,
    );

    setShowPasswordMismatch(isPasswordMismatch);
  }, [password1, password2, signUpAttempts]);

  return (
    <form autoComplete="on">
      <input type="email" placeholder="Email" onChange={onEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={onPassword1Change}
      />
      <input
        type="password"
        placeholder="Confirm password"
        onChange={onPassword2Change}
      />
      <input type="submit" value="Sign Up" onClick={signUpSubmit} />
      {showPasswordMismatch && <div>Passwords do not match</div>}
      {hasAuthMessage && <div>{authMessage}</div>}
    </form>
  );
};
