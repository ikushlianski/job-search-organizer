import React from 'react';
import { Button, Pane } from 'evergreen-ui';
import { CreateOppController } from '../controller/new-opp.controller';
import { QuestionBlock } from '../components/question-block.component';
import { PreFillSteps } from '../components/pre-fill-steps.component';
import { ThankYouAnyway } from '../components/thanks-anyway.component';
import { Loader } from '../../../../common/components/loader.component';
import '../../../../common/pages/page.scss';

export const CreateOpportunityPage: React.FC = () => {
  const suggestOpportunityLink =
    process.env.SUGGEST_LINK || 'http://jso.ilya.online/opportunities/create';

  const [prefillStepsDone, setPrefillStepsDone] = React.useState<
    boolean | null
  >(null);
  // todo if signed in, get accessToken and load personal iteration settings, which will show HR my reaction to each particular point they pick

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
                    {hasError && (
                      <div className="CreateOpportunityPage__ErrorMessage">
                        {message}
                      </div>
                    )}
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
