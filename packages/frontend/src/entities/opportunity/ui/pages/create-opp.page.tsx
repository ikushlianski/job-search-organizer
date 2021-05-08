import React from 'react';
import { Loader } from '../../../../common/components/loader.component';
import { AuthContext } from '../../../../auth/auth.context';
import { CreateOppController } from '../../controllers/new-opp.controller';
import { QuestionBlock } from '../components/question-block.component';
import { Button } from 'evergreen-ui';

export const CreateOpportunityPage: React.FC = () => {
  const signedIn = React.useContext(AuthContext);

  // todo if signed in, get accessToken and load personal iteration settings, which will decorate this opportunity with -1 and +1 icons (or green/red flags)

  return (
    <CreateOppController
      render={({
        questionsByCategory,
        loading,
        loaded,
        hasError,
        onCreate,
        message,
      }) => {
        const questionnaire = Object.entries(questionsByCategory).map(
          ([categoryName, categoryQuestions]) => {
            return (
              <QuestionBlock
                questions={categoryQuestions}
                title={categoryName}
              />
            );
          },
        );

        return loading ? (
          <Loader />
        ) : (
          <div className="CreateOpportunity">
            <form className="CreateOpportunity__Form">
              {questionnaire}
              <Button
                className="CreateOpportunity__FormSubmit"
                onClick={onCreate}
              >
                Save
              </Button>
              {hasError && message}
            </form>
          </div>
        );
      }}
    />
  );
};
