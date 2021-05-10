import React from 'react';
import { IterationItemState } from './iteration.interface';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../auth/store/auth.selector';
import { fetchMyIterations } from './store/iteration.action';
import {
  selectUserIterations,
  selectUserIterationState,
} from './store/iteration.selector';

interface Props {
  render: ({
    iterations,
    onIterationStart,
    loading,
  }: {
    iterations: IterationItemState[];
    onIterationStart: () => void;
    loading: boolean;
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
  const iterationsState = useSelector(selectUserIterationState);

  React.useEffect(() => {
    if (accessToken) dispatch(fetchMyIterations(accessToken));
  }, [accessToken, dispatch]);

  return render({
    iterations,
    onIterationStart,
    loading: iterationsState.loading,
  });
};
