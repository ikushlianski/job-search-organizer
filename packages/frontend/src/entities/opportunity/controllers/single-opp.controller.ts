import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OpportunityId } from '../../../routes/routes.interface';
import { SingleOpptyPageData } from '../current-opps.interface';
import { selectOpportunityDetails } from '../store/current-opps.selector';
import {
  selectIterationSettings,
  selectUserIterationState,
} from '../../iteration/store/iteration.selector';
import { useAccessToken } from '../../../common/hooks/use-access-token.hook';
import { selectCurrentOpportunityState } from '../store/new-opp.selector';
import { fetchMyCurrentIterationSettings } from '../../iteration/store/iteration.action';
import { fetchOpportunityDetails } from '../store/current-opps.action';

interface Props {
  render: (pageData: SingleOpptyPageData) => JSX.Element;
}

export const SingleOppController: React.FC<Props> = ({ render }) => {
  const { opportunityId } = useParams<OpportunityId>();

  const dispatch = useDispatch();
  const accessToken = useAccessToken();

  const iterationState = useSelector(selectUserIterationState);
  const iterationSettings = useSelector(selectIterationSettings);
  const opportunityState = useSelector(selectCurrentOpportunityState);

  const singleOppDetails = useSelector(
    selectOpportunityDetails(+opportunityId),
  );

  React.useEffect(() => {
    dispatch(fetchMyCurrentIterationSettings(accessToken));

    if (iterationState.activeIterationId) {
      dispatch(
        fetchOpportunityDetails({
          iterationId: iterationState.activeIterationId,
          opportunityId: +opportunityId,
          accessToken,
        }),
      );
    }
  }, [iterationState.activeIterationId, accessToken, dispatch, opportunityId]);

  return render({
    loaded: opportunityState.loaded && iterationState.loaded,
    loading: opportunityState.loading || iterationState.loading,
    hasError: opportunityState.hasError || iterationState.hasError,
    message: opportunityState.message || iterationState.message,
    iterationSettings,
    opportunityDetails: singleOppDetails,
  });
};
