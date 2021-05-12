import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAccessToken } from '../../../common/hooks/use-access-token.hook';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewUserOpportunityState } from '../store/new-opp.selector';
import { resetCreatedOppty } from '../store/new-opp.reducer';
import { createNewOpportunity } from '../store/new-opp.action';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { fetchMyCurrentIterationSettings } from '../../iteration/store/iteration.action';
import { selectUserIterationState } from '../../iteration/store/iteration.selector';

interface PageProps extends LoadingProps {
  prefillStepsDone: boolean | null;
  onPrefillStepsDone: (status: boolean | null) => void;
}

interface Props {
  render: (pageProps: PageProps) => JSX.Element;
}

export const CreateOppController: React.FC<Props> = ({
  render,
}): JSX.Element | null => {
  const [prefillStepsDone, setPrefillStepsDone] = React.useState<
    boolean | null
  >(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useAccessToken();
  const newOpportunityState = useSelector(selectNewUserOpportunityState);
  const activeIterationSettings = useSelector(selectUserIterationState);

  const activeIterationId =
    activeIterationSettings.activeIterationId ||
    activeIterationSettings?.activeIterationSettings?.[0].iteration_id;

  const onPrefillStepsDone = (status: boolean | null) => {
    if (status) {
      setPrefillStepsDone(true);
      dispatch(fetchMyCurrentIterationSettings(accessToken));
    } else {
      setPrefillStepsDone(false);
    }
  };

  React.useEffect(() => {
    const newOpptyId = newOpportunityState.opportunity_id;

    if (prefillStepsDone && activeIterationId && !newOpportunityState.created) {
      dispatch(
        createNewOpportunity({ accessToken, iterationId: activeIterationId }),
      );
    }

    if (newOpportunityState.created && newOpptyId && activeIterationId) {
      history.push(
        `/opportunities/id/${newOpptyId}?token=${process.env.TEMP_TOKEN}`,
      );

      dispatch(resetCreatedOppty(''));
    }
  }, [
    accessToken,
    activeIterationId,
    dispatch,
    history,
    newOpportunityState.created,
    newOpportunityState.opportunity_id,
    prefillStepsDone,
  ]);

  return render({
    loading: newOpportunityState.loading,
    loaded: newOpportunityState.loaded,
    hasError: newOpportunityState.hasError,
    message: newOpportunityState.message,
    prefillStepsDone,
    onPrefillStepsDone,
  });
};
