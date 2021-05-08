import React, { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import {
  NewOpportunityState,
  OpportunityAnswer,
} from '../opportunity.interface';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { selectNewUserOpportunityState } from '../store/new-opp.selector';
import { QuestionsByCategory } from '../../question/question.interface';

interface PageProps extends LoadingProps, NewOpportunityState {
  onCreate: MouseEventHandler<HTMLElement>;
  questionsByCategory: QuestionsByCategory;
}

interface Props {
  render: (pageProps: PageProps) => JSX.Element;
}

export const CreateOppController: React.FC<Props> = ({
  render,
}): JSX.Element | null => {
  const newOppState = useSelector(selectNewUserOpportunityState);

  if (!newOppState) return null;

  const {
    loading,
    loaded,
    answers,
    hasError,
    message,
    questionsByCategory,
  } = newOppState;

  const onCreate = () => {
    // dispatch save opp answers action
  };

  return render({
    onCreate,
    loaded,
    loading,
    hasError,
    message,
    questionsByCategory,
    answers,
  });
};
