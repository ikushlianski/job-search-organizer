import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OpportunityId } from '../../../routes/routes.interface';
import { SingleOpptyPageData } from '../current-opps.interface';
import { selectOpportunityDetails } from '../store/current-opps.selector';
import { selectUserIterationState } from '../../iteration/store/iteration.selector';
import { useAccessToken } from '../../../common/hooks/use-access-token.hook';
import { selectCurrentOpportunityState } from '../store/new-opp.selector';
import { fetchMyCurrentIterationSettings } from '../../iteration/store/iteration.action';
import {
  fetchOpportunityAnswers,
  fetchOpportunityDetails,
} from '../store/current-opps.action';
import { selectActiveOpportunityState } from '../store/active-opp.selector';
import { setActiveOpportunityId } from '../store/active-opp.reducer';

interface Props {
  render: (pageData: SingleOpptyPageData) => JSX.Element;
}

export const SingleOppController: React.FC<Props> = ({ render }) => {
  const { opportunityId } = useParams<OpportunityId>();

  const dispatch = useDispatch();
  const accessToken = useAccessToken();

  const iterationState = useSelector(selectUserIterationState);
  const opportunityState = useSelector(selectCurrentOpportunityState);

  const activeOpportunityState = useSelector(selectActiveOpportunityState);

  const singleOppDetails = useSelector(
    selectOpportunityDetails(+opportunityId),
  );

  const activeIterationId =
    iterationState?.activeIterationSettings?.[0].iteration_id;

  React.useEffect(() => {
    dispatch(setActiveOpportunityId(+opportunityId));
  }, [dispatch, opportunityId]);

  React.useEffect(() => {
    dispatch(fetchMyCurrentIterationSettings(accessToken));
  }, [accessToken, dispatch]);

  React.useEffect(() => {
    if (activeIterationId) {
      dispatch(
        fetchOpportunityDetails({
          iterationId: Number(activeIterationId),
          opportunityId: +opportunityId,
          accessToken,
        }),
      );

      dispatch(
        fetchOpportunityAnswers({
          opportunityId: +opportunityId,
          accessToken,
        }),
      );
    }
  }, [accessToken, activeIterationId, dispatch, opportunityId]);

  return render({
    loaded: opportunityState.loaded && iterationState.loaded,
    loading: opportunityState.loading || iterationState.loading,
    hasError: opportunityState.hasError || iterationState.hasError,
    message: opportunityState.message || iterationState.message,
    questionsWithAnswersByCat: activeOpportunityState.questionnaire,
    opportunityAnswers: activeOpportunityState.opportunityAnswers,
    opportunityDetails: singleOppDetails,
  });
};
