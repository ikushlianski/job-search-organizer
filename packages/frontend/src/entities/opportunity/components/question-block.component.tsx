import React from 'react';
import { QuestionsWithAnswersByCategory } from '../../question/question.interface';
import { OpportunityAnswer } from '../current-opps.interface';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionAndAnswers } from './qa.component';
import { selectActiveOpportunityState } from '../store/active-opp.selector';
import './question-block.style.scss';
import { recordAnswer } from '../store/active-opp.action';
import { useAccessToken } from '../../../common/hooks/use-access-token.hook';
import { Heading } from 'evergreen-ui';

interface Props {
  questionsWithAnswers: QuestionsWithAnswersByCategory; // how you answered iteration questions
  opportunityAnswers?: OpportunityAnswer[]; // HR's recorded answers to this opportunity
  questionCategoryTitle: string;
}

export const QuestionCategoryBlock: React.FC<Props> = ({
  questionCategoryTitle,
  questionsWithAnswers,
  opportunityAnswers,
}) => {
  const dispatch = useDispatch();
  const accessToken = useAccessToken();
  const { activeOpportunityId } = useSelector(selectActiveOpportunityState);

  const onConfirm = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(
      recordAnswer({ opportunityId: Number(activeOpportunityId), accessToken }),
    );
  };

  const onDelay = (event: React.MouseEvent) => {
    event.preventDefault();

    // dispatch(recordDelay());
  };

  return (
    <div className="QuestionBlock">
      <Heading size={700}>{questionCategoryTitle.toUpperCase()}</Heading>
      {questionsWithAnswers[questionCategoryTitle].map((question) => {
        const hrAnswersToThisQuestion = opportunityAnswers?.filter(
          (answer) => answer.question_id === question.id,
        );

        return (
          <QuestionAndAnswers
            key={question.id}
            onConfirm={onConfirm}
            onDelay={onDelay}
            question={question}
            opportunityId={activeOpportunityId}
            hrAnswers={hrAnswersToThisQuestion || []}
          />
        );
      })}
    </div>
  );
};
