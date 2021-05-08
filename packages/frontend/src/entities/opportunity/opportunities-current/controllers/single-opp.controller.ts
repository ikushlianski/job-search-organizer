import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OpportunityId } from '../../../../routes/routes.interface';
import { OpportunityItemState } from '../current-opps.interface';
import { getOpportunityDetails } from '../store/current-opps.action';
import { selectOpportunityDetails } from '../store/current-opps.selector';
import { selectUserIterationState } from '../../../iteration/store/iteration.selector';
import {
  fetchMyCurrentIterationSettings,
  fetchMyIterations,
} from '../../../iteration/store/iteration.action';
import { LoadingProps } from '../../../../common/types/loading-props.interface';
import { IterationSettingsWithAnswers } from '../../../iteration/iteration.interface';
import { useAccessToken } from '../../../../common/hooks/use-access-token.hook';

interface Props {
  render: (pageData: SingleOpptyPageData) => JSX.Element;
}

interface SingleOpptyPageData extends LoadingProps {
  activeIterationId: number | undefined;
  activeIterationSettings: IterationSettingsWithAnswers | undefined;
  opportunityDetails: OpportunityItemState | undefined;
}

export const SingleOppController: React.FC<Props> = ({ render }) => {
  const { opportunityId } = useParams<OpportunityId>();

  const dispatch = useDispatch();
  const accessToken = useAccessToken();

  const {
    loaded,
    loading,
    hasError,
    activeIterationId,
    activeIterationSettings,
  } = useSelector(selectUserIterationState);

  const opportunityDetailsAndState = useSelector(
    selectOpportunityDetails(+opportunityId),
  );

  React.useEffect(() => {
    if (!activeIterationId) {
      // get iteration list and activeIterationId
      dispatch(fetchMyIterations(accessToken));

      return;
    }

    console.log('activeIterationId', activeIterationId);

    if (!activeIterationSettings && accessToken && activeIterationId) {
      console.log('activeIterationSettings', activeIterationSettings);
      console.log('activeIterationId', activeIterationId);

      dispatch(
        fetchMyCurrentIterationSettings({
          accessToken,
          iterationId: activeIterationId,
        }),
      );
    }

    if (accessToken && activeIterationId) {
      console.log('use effect 3');
      dispatch(
        getOpportunityDetails({
          accessToken,
          opportunityId: +opportunityId,
          iterationId: activeIterationId,
        }),
      );
    }
  }, [
    accessToken,
    activeIterationId,
    activeIterationSettings,
    dispatch,
    opportunityId,
  ]);

  return render({
    loading,
    loaded,
    activeIterationId,
    activeIterationSettings,
    hasError,
    opportunityDetails: opportunityDetailsAndState,
  });
};
