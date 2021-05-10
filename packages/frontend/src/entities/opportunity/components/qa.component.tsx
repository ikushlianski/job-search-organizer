import React from 'react';
import { AnswerElementResolver } from './answer-elem-resolver.component';
import { AnswerControls } from './answer-controls.component';
import { Question } from '../../question/question.interface';
import { OpportunityAnswer } from '../current-opps.interface';
import { Heading } from 'evergreen-ui';

interface Props {
  question: Question;
  onConfirm: (event: React.MouseEvent) => void;
  onDelay: (event: React.MouseEvent) => void;
  hrAnswers: OpportunityAnswer[];
  opportunityId?: number;
}

export const QuestionAndAnswers: React.FC<Props> = ({
  question,
  onConfirm,
  onDelay,
  hrAnswers,
}) => {
  const [showMyReaction, setShowMyReaction] = React.useState(false);

  const { input_type, question_text, question_key, myAnswers } = question;

  React.useEffect(() => {
    if (hrAnswers.length) {
      setShowMyReaction(Boolean(hrAnswers.length));
    }
  }, [hrAnswers.length, showMyReaction]);

  console.log(
    `${question.question_text}: --> hrAnswers.length`,
    hrAnswers.length,
  );

  return (
    <div key={question_key} className="QuestionAndAnswers">
      <Heading marginTop="default" size={500}>
        <b>{question_text}</b>
      </Heading>
      <div className="QuestionBlock__Answers">
        <AnswerElementResolver
          inputType={input_type}
          question={question}
          disabled={Boolean(hrAnswers.length)}
          hrAnswers={hrAnswers}
        />
        <AnswerControls onConfirm={onConfirm} onDelay={onDelay} />
      </div>
      {showMyReaction && (
        <div className="QuestionAndAnswers__Reaction">
          {/*{calculateMyReaction(hrAnswers, myAnswers)}*/}
        </div>
      )}
    </div>
  );
};
