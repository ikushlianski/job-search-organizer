import React from 'react';
import { QuestionsWithAnswersByCategory } from '../../question/question.interface';
import { OpportunityAnswer } from '../current-opps.interface';
import { QuestionAndAnswers } from './qa.component';
import './question-block.style.scss';
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
            question={question}
            hrAnswers={hrAnswersToThisQuestion || []}
          />
        );
      })}
    </div>
  );
};
