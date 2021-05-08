import { Button } from 'evergreen-ui';
import React from 'react';

interface Props {
  link: string;
  setPrefillStepsDone: (status: null) => void;
}

export const ThankYouAnyway: React.FC<Props> = ({
  link,
  setPrefillStepsDone,
}) => {
  return (
    <>
      <h2>
        Thank you anyway for your time! Hope you will have something for me in
        the future.
        <p>
          If you have, please use this link to suggest a new opportunity:
          <a href={link}>{link}</a>.
        </p>
        I will be notified via email
      </h2>
      <Button onClick={() => setPrefillStepsDone(null)}>
        Suggest another opportunity
      </Button>
    </>
  );
};
