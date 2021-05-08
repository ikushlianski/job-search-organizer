import React, { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewOpportunityState } from '../../opportunities-current/current-opps.interface';
import { LoadingProps } from '../../../../common/types/loading-props.interface';
import { selectNewUserOpportunityState } from '../store/new-opp.selector';
import { QuestionsByCategory } from '../../../question/question.interface';
import { fetchQuestionsWithAnswers } from '../store/new-opp.action';
import { useAccessToken } from '../../../../common/hooks/use-access-token.hook';

interface PageProps extends LoadingProps, NewOpportunityState {
  onCreate?: MouseEventHandler<HTMLElement>;
  questionsByCategory?: QuestionsByCategory;
}

interface Props {
  render: (pageProps: PageProps) => JSX.Element;
}

export const CreateOppController: React.FC<Props> = ({
  render,
}): JSX.Element | null => {
  const dispatch = useDispatch();
  const newOppState = useSelector(selectNewUserOpportunityState);

  const onCreate = () => {
    // dispatch save opp answers action
  };

  const accessToken = useAccessToken();

  React.useEffect(() => {
    dispatch(fetchQuestionsWithAnswers(accessToken));
  }, [dispatch, accessToken]);

  if (!newOppState.questionsByCategory)
    return render({
      loading: true,
      loaded: false,
      message: '',
      hasError: false,
    });

  const {
    loading,
    loaded,
    hasError,
    message,
    questionsByCategory,
  } = newOppState;

  return render({
    onCreate,
    loaded,
    loading,
    hasError,
    message,
    questionsByCategory,
  });
};
