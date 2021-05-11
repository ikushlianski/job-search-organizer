import React from 'react';
import { Button } from 'evergreen-ui';

interface Props {
  onConfirm: (event: React.MouseEvent) => void;
  onDelay: (event: React.MouseEvent) => void;
  answered: boolean;
}

export const AnswerControls: React.FC<Props> = ({
  onConfirm,
  onDelay,
  answered,
}) => {
  if (answered) return null;

  return (
    <div className="AnswerControls">
      <div className="AnswerControls__Control">
        <Button margin="0.5rem" onClick={onConfirm}>
          Confirm
        </Button>
      </div>
      <div className="AnswerControls__Control">
        <Button margin="0.5rem" appearance="minimal" onClick={onDelay}>
          Delay
        </Button>
      </div>
    </div>
  );
};
