import React from 'react';
import { Pane, Text, Textarea } from 'evergreen-ui';
import { OpportunityAnswer } from '../current-opps.interface';
import { Question } from '../../question/question.interface';

interface Props {
  selectedOppAnswers: OpportunityAnswer[];
  hrAnswers: OpportunityAnswer[];
  onHrTypes: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  question: Question;
  hrComment: string;
}

export const DetailsFromHR: React.FC<Props> = ({
  selectedOppAnswers,
  hrAnswers,
  onHrTypes,
  question,
  hrComment,
}) => {
  const thisQuestion = hrAnswers.find(
    (answer) => answer.question_id === question.id,
  );

  const hasHrCommentFromDb = thisQuestion?.hr_comment;

  return (
    <>
      {selectedOppAnswers.length > 0 && hrAnswers.length === 0 && (
        <div className="QuestionAndAnswers__HrComment">
          <Textarea
            placeholder="Any details you want to add?"
            disabled={Boolean(hrAnswers.length)}
            onChange={onHrTypes}
            id={String(question.id)}
            name={question.question_key}
            value={hrComment}
          />
        </div>
      )}

      {hasHrCommentFromDb && hrAnswers.length > 0 && (
        <div className="QuestionAndAnswers__HrComment QuestionAndAnswers__HrComment--disabled">
          <small>Details from HR:</small>
          <Pane
            color={'grey'}
            fontSize={14}
            background="blueTint"
            padding={'0.5rem'}
            marginBottom={16}
          >
            <Text color={'grey'}>
              <i>{hasHrCommentFromDb}</i>
            </Text>
          </Pane>
        </div>
      )}
    </>
  );
};
