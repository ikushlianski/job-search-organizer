import { Pane } from 'evergreen-ui';
import React from 'react';
import { QuestionCategoryBlock } from './question-block.component';
import { SingleOpptyPageData } from '../current-opps.interface';

export const OpportunityAnswersForm: React.FC<SingleOpptyPageData> = ({
  hasError,
  message,
  opportunityDetails, // how HR answered earlier
  iterationSettings,
}) => {
  const questionnaire = Object.entries(
    iterationSettings?.questionsWithAnswersByCat || [],
  ).map(([categoryName]) => {
    if (!iterationSettings) return null;

    return (
      <Pane key={categoryName} elevation={1} padding="2rem" marginBottom="2rem">
        <QuestionCategoryBlock
          questionCategoryTitle={categoryName}
          questionsWithAnswers={iterationSettings.questionsWithAnswersByCat}
          opportunityAnswers={opportunityDetails?.answers}
        />
      </Pane>
    );
  });

  return (
    <form className="OpportunityAnswersForm">
      {questionnaire}
      {hasError && (
        <div className="OpportunityAnswersPage__ErrorMessage">{message}</div>
      )}
    </form>
  );
};
