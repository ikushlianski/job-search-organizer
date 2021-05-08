import React from 'react';
import { Loader } from '../../../../common/components/loader.component';
import { CreateOppController } from '../controller/new-opp.controller';
import { QuestionBlock } from '../components/question-block.component';
import { Button, Pane } from 'evergreen-ui';

import '../../../../common/pages/page.scss';
import { PreFillSteps } from '../components/pre-fill-steps.component';
import { ThankYouAnyway } from '../components/thanks-anyway.component';

export const CreateOpportunityPage: React.FC = () => {
  const suggestOpportunityLink =
    process.env.SUGGEST_LINK || 'http://jso.ilya.online/opportunities/create';

  const [prefillStepsDone, setPrefillStepsDone] = React.useState<
    boolean | null
  >(null);
  // todo if signed in, get accessToken and load personal iteration settings, which will decorate this opportunity with -1 and +1 icons (or green/red flags)

  const onPrefillStepsDone = (status: boolean) => {
    if (status) {
      setPrefillStepsDone(true);
    } else {
      setPrefillStepsDone(false);
    }
  };

  return (
    <CreateOppController
      render={({
        questionsByCategory,
        loading,
        hasError,
        onCreate,
        message,
      }) => {
        const questionnaire = Object.entries(questionsByCategory || []).map(
          ([categoryName, categoryQuestions]) => {
            return (
              <Pane
                key={categoryName}
                elevation={1}
                padding="2rem"
                marginBottom="2rem"
              >
                <QuestionBlock
                  questions={categoryQuestions}
                  title={categoryName}
                />
              </Pane>
            );
          },
        );

        return (
          <div className="Page CreateOpportunityPage">
            {loading ? (
              <Loader />
            ) : (
              <>
                {prefillStepsDone === null && (
                  <PreFillSteps setPreFillStepsDone={onPrefillStepsDone} />
                )}

                {prefillStepsDone === false && (
                  <ThankYouAnyway
                    setPrefillStepsDone={setPrefillStepsDone}
                    link={suggestOpportunityLink}
                  />
                )}

                {prefillStepsDone === true && (
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
                )}
              </>
            )}
          </div>
        );
      }}
    />
  );
};
