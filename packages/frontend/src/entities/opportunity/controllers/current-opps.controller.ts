import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../../../auth/store/auth.selector';
import { OpportunityListState } from '../opportunity.interface';
import { selectMyCurrentOpportunities } from '../store/current-opps.selector';
import { getMyCurrentOpportunitiesAction } from '../store/current-opps.action';

interface Props {
  render: (opportunityListState: OpportunityListState) => JSX.Element;
}

export const CurrentOppsController: React.FC<Props> = ({ render }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getUserToken);

  console.log('accessToken', accessToken);

  const opportunitiesState = useSelector(selectMyCurrentOpportunities);

  React.useEffect(() => {
    if (accessToken) dispatch(getMyCurrentOpportunitiesAction(accessToken));
  }, [accessToken]);

  return render(opportunitiesState);
};
