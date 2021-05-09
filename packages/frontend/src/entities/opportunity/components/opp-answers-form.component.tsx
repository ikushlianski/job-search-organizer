import { Pane } from 'evergreen-ui';
import React from 'react';
import { QuestionCategoryBlock } from './question-block.component';
import { SingleOpptyPageData } from '../current-opps.interface';
import {
  IterationSetting,
  IterationSettingsWithAnswers,
} from '../../iteration/iteration.interface';
import { Question } from '../../question/question.interface';
import { iterationSettingsToQA } from '../utils/iter-settings-to-qa.util';

export const OpportunityAnswersForm: React.FC<SingleOpptyPageData> = ({
  hasError,
  message,
  opportunityDetails, // how HR answered earlier
  iterationSettings,
}) => {
  const questionnaire = Object.entries(
    iterationSettings?.iterationSettings || [],
  ).map(([categoryName]) => {
    if (!iterationSettings) return null;

    // extract questions from Iteration Settings and attach to them answers that user gave when creating an iteration, plus attach all possible answers to build a form
    const questionsWithAnswers = iterationSettingsToQA(
      categoryName,
      iterationSettings,
    );

    return (
      <Pane key={categoryName} elevation={1} padding="2rem" marginBottom="2rem">
        <QuestionCategoryBlock
          questionCategoryTitle={categoryName}
          questionsWithAnswers={questionsWithAnswers}
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
