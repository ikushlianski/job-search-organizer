import React from 'react';
import { IterationItemState } from './iteration.interface';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../auth/store/auth.selector';
import { getMyIterationsAction } from './store/iteration.action';
import { selectUserIterations } from './store/iteration.selector';

interface Props {
  render: ({
    iterations,
    onIterationStart,
  }: {
    iterations: IterationItemState[];
    onIterationStart: () => void;
  }) => JSX.Element;
}

export const IterationController: React.FC<Props> = ({ render }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getUserToken);

  const onIterationStart = () => {
    console.log('will start iteration');
  };

  console.log('accessToken', accessToken);

  const iterations = useSelector(selectUserIterations);

  React.useEffect(() => {
    if (accessToken) dispatch(getMyIterationsAction(accessToken));
  }, [accessToken]);

  return render({ iterations, onIterationStart });
};
