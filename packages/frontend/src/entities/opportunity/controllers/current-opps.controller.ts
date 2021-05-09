import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../../auth/store/auth.selector';
import { OpportunityListState } from '../current-opps.interface';
import { selectMyCurrentOpportunities } from '../store/current-opps.selector';
import { getMyCurrentOpportunities } from '../store/current-opps.action';

interface Props {
  render: (opportunityListState: OpportunityListState) => JSX.Element;
}

export const CurrentOppsController: React.FC<Props> = ({ render }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getUserToken);

  const opportunitiesState = useSelector(selectMyCurrentOpportunities);

  React.useEffect(() => {
    if (accessToken) dispatch(getMyCurrentOpportunities(accessToken));
  }, [accessToken, dispatch]);

  return render(opportunitiesState);
};
