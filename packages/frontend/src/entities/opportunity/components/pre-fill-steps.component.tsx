import React from 'react';
import { Button, Pane } from 'evergreen-ui';

interface Props {
  setPreFillStepsDone: (status: boolean) => void;
}

export const PreFillSteps: React.FC<Props> = ({ setPreFillStepsDone }) => {
  const [explanationDone, setExplanationDone] = React.useState(false);

  const [knowsBasicProjectReqs] = React.useState(null);

  // todo fetch person's real CRITICAL iteration preferences. Hardcoding mine for now

  const onProjectFits = () => {
    setExplanationDone(true);
    setPreFillStepsDone(true);
  };

  const onProjectNotFits = () => {
    setExplanationDone(true);
    setPreFillStepsDone(false);
  };

  return (
    <div className="PreFillSteps">
      {!explanationDone && (
        <>
          <h2>
            Spend ~5 min filling in the form and save us both about an hour!
          </h2>
          <p>
            The system automatically analyzes all your answers against my
            preferences. Each project gets ranked by score.
          </p>
          <p>
            The most interesting projects catch my attention, as they land at
            the top of opportunity list
          </p>
          <p>As you go you will see my reaction to the answers you provide.</p>
          <p>
            At the end of this short form, you will see my salary expectations,
            English level and availability dates.
          </p>
          <p> Thank you and let's get started!</p>
          <Button onClick={() => setExplanationDone(true)}>Ok, got it</Button>
        </>
      )}

      {explanationDone && knowsBasicProjectReqs === null && (
        <>
          <p>
            Please make sure that the project you are going to suggest roughly
            fits these criteria:
          </p>
          <ul>
            <li>
              Number of people <i>on the entire project</i> is no more than
              20-30
            </li>
            <li>
              Project tasks are full-stack or backend, with Node.js and possibly
              React used as primary technologies
            </li>
            <li>
              The project's domain is NOT cryptocurrencies, gambling or
              healthcare
            </li>
          </ul>

          <Pane>
            <Button onClick={onProjectFits}>My project fits 👍</Button>
            <Button onClick={onProjectNotFits}>Hmm, does not fit</Button>
          </Pane>
        </>
      )}
    </div>
  );
};
