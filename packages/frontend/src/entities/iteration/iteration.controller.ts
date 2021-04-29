import React from 'react';
import { Iteration } from './iteration.interface';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../auth/store/auth.selector';
import { getMyIterations } from './store/iteration.action';
import { getUserIterations } from './store/iteration.selector';

interface Props {
  render: (iteration: Iteration[]) => JSX.Element;
}

export const IterationController: React.FC<Props> = ({ render }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getUserToken);

  console.log('accessToken', accessToken);

  const iterations = useSelector(getUserIterations);

  React.useEffect(() => {
    if (accessToken) dispatch(getMyIterations(accessToken));
  }, [accessToken]);

  return render(iterations);
};
