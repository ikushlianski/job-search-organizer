import React from 'react';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../store/auth.action';

export const SignInForm = (): React.ReactElement => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const signInSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (email && password) {
      dispatch(signInAction({ email, password }));
    }
  };

  return (
    <form>
      <input type="email" placeholder="Email" onChange={onEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
      />
      <input type="submit" value="Sign In" onClick={signInSubmit} />
    </form>
  );
};
