import React from 'react';
import { Button } from 'evergreen-ui';
import { OpportunityAnswer } from '../current-opps.interface';
import { Question } from '../../question/question.interface';

interface Props {
  onConfirm: (event: React.MouseEvent) => void;
  onDelay: (event: React.MouseEvent) => void;
  answered: boolean;
  selectedOpportunityAnswers: OpportunityAnswer[];
  question: Question;
}

export const AnswerControls: React.FC<Props> = ({
  onConfirm,
  // onDelay,
  answered,
  selectedOpportunityAnswers,
  question,
}) => {
  if (answered) return null;

  const optionsArePossible =
    question.input_type === 'radio' ||
    question.input_type === 'checkbox' ||
    question.input_type === 'select';

  const disabled = optionsArePossible && !selectedOpportunityAnswers.length;

  return (
    <div className="AnswerControls">
      <div className="AnswerControls__Control">
        <Button disabled={disabled} onClick={onConfirm}>
          Confirm
        </Button>
      </div>
      {/*<div className="AnswerControls__Control">*/}
      {/*  <Button margin="0.5rem" appearance="minimal" onClick={onDelay}>*/}
      {/*    Delay*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
};
