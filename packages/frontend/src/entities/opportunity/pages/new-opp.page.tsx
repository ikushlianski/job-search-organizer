import React from 'react';
import { CreateOppController } from '../controllers/new-opp.controller';
import { PreFillSteps } from '../components/pre-fill-steps.component';
import { ThankYouAnyway } from '../components/thanks-anyway.component';
import { Loader } from '../../../common/components/loader.component';
import '../../../common/pages/page.scss';

export const CreateOpportunityPage: React.FC = () => {
  const suggestOpportunityLink =
    process.env.CREATE_OPPORTUNITY_LINK ||
    'http://jso.ilya.online/opportunities/create';

  return (
    <CreateOppController
      render={({ loading, prefillStepsDone, onPrefillStepsDone }) => {
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
                    setPrefillStepsDone={onPrefillStepsDone}
                    link={suggestOpportunityLink}
                  />
                )}
              </>
            )}
          </div>
        );
      }}
    />
  );
};
