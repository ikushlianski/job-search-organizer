import { Pane, toaster } from 'evergreen-ui';
import React from 'react';
import { QuestionCategoryBlock } from './question-block.component';
import { SingleOpptyPageData } from '../current-opps.interface';
import { FormIntroduction } from './form-intro.component';

export const OpportunityAnswersForm: React.FC<SingleOpptyPageData> = ({
  hasError,
  message,
  opportunityDetails, // how HR answered earlier
  questionsWithAnswersByCat,
  opportunityAnswers,
}) => {
  const mainQuestionnaire = Object.entries(questionsWithAnswersByCat || []).map(
    ([categoryName, questions]) => {
      if (questions.length === 0) return null;

      return (
        <Pane
          key={categoryName}
          elevation={1}
          padding="2rem"
          marginBottom="2rem"
        >
          <QuestionCategoryBlock
            questionCategoryTitle={categoryName}
            questionsWithAnswers={questionsWithAnswersByCat || {}}
            opportunityAnswers={opportunityAnswers}
          />
        </Pane>
      );
    },
  );

  return (
    <form className="OpportunityAnswersForm">
      <FormIntroduction />

      {mainQuestionnaire}

      {hasError && message && toaster.danger(message)}
    </form>
  );
};
