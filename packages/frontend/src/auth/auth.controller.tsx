import React from 'react';

interface Props {
  render: (signedIn: boolean) => JSX.Element;
}

export const AuthController: React.FC<Props> = ({ render }) => {
  const signedIn = true;

  return render(signedIn);
};
