import React from 'react';
import { Badge, Heading } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { AnswerElementResolver } from './answer-elem-resolver.component';
import { AnswerControls } from './answer-controls.component';
import { Question } from '../../question/question.interface';
import { OpportunityAnswer } from '../current-opps.interface';
import { recordAnswer } from '../store/active-opp.action';
import { useAccessToken } from '../../../common/hooks/use-access-token.hook';
import { selectActiveOpportunityState } from '../store/active-opp.selector';
import { DetailsFromHR } from './details-from-hr.component';
import './qa.scss';

interface Props {
  question: Question;
  hrAnswers: OpportunityAnswer[];
}

export const QuestionAndAnswers: React.FC<Props> = ({
  question,
  hrAnswers,
}) => {
  const [textAnswer, setTextAnswer] = React.useState(
    hrAnswers[0]?.string_answer,
  );

  console.log('hrAnswers[0]?.numeric_answer', hrAnswers[0]?.numeric_answer);

  const [numericAnswer, setNumericAnswer] = React.useState(
    hrAnswers[0]?.numeric_answer,
  );

  const [selectedOppAnswers, setSelectedOppAnswers] = React.useState(hrAnswers);

  const [showMyReaction, setShowMyReaction] = React.useState(false);
  const [hrComment, setHrComment] = React.useState('');

  const dispatch = useDispatch();
  const accessToken = useAccessToken();
  const { activeOpportunityId } = useSelector(selectActiveOpportunityState);

  const { input_type, question_text, question_key } = question;
  const isAnswered = hrAnswers.length > 0;

  React.useEffect(() => {
    console.log('numericAnswer in useEffect', numericAnswer);
    setNumericAnswer(hrAnswers[0]?.numeric_answer);
  }, [hrAnswers.length]);

  const onTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (question.input_type === 'number') {
      console.log('event.target.value', event.target.value);

      const upToDateValue = Number(event.target.value);

      setNumericAnswer(upToDateValue);

      // todo refactor this duplication of mapping to OppAnswer
      setSelectedOppAnswers([
        {
          opportunity_id: Number(activeOpportunityId),
          answer_id: undefined,
          question_id: question.id,
          hr_comment: hrComment,
          numeric_answer: upToDateValue,
          string_answer:
            question.input_type !== 'number' &&
            question.input_type !== 'checkbox' &&
            question.input_type !== 'select'
              ? textAnswer
              : undefined,
        },
      ]);
    } else {
      const upToDateValue = event.target.value;

      setTextAnswer(upToDateValue);

      setSelectedOppAnswers([
        {
          opportunity_id: Number(activeOpportunityId),
          answer_id: undefined,
          question_id: question.id,
          hr_comment: hrComment,
          numeric_answer: undefined,
          string_answer:
            question.input_type !== 'checkbox' &&
            question.input_type !== 'select'
              ? upToDateValue
              : undefined,
        },
      ]);
    }
  };

  const onSelect = (event: React.ChangeEvent, answerIds: number[]) => {
    const givenOpportunityAnswers: OpportunityAnswer[] = answerIds.map(
      // todo refactor this duplication of mapping to OppAnswer
      (answerId) => ({
        opportunity_id: Number(activeOpportunityId),
        answer_id: answerId,
        question_id: question.id,
        hr_comment: hrComment,
        my_comment: hrAnswers.find((a) => a.answer_id === answerId)?.my_comment,
        is_delayed: undefined,
        delayed_date: undefined,
      }),
    );

    setSelectedOppAnswers(givenOpportunityAnswers);
  };

  const onConfirmAnswer = (event: React.MouseEvent) => {
    event.preventDefault();

    const hasAnswers = selectedOppAnswers.length > 0;

    const optionsArePossible =
      question.input_type === 'radio' ||
      question.input_type === 'checkbox' ||
      question.input_type === 'select';

    if (activeOpportunityId && (hasAnswers || !optionsArePossible)) {
      console.log('data --->', selectedOppAnswers);
      dispatch(
        recordAnswer({
          opportunityId: Number(activeOpportunityId),
          accessToken,
          data: selectedOppAnswers,
        }),
      );
    }
  };

  const onHrTypes = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const hrComment = event.target.value;

    setHrComment(hrComment);

    const updatedAnswers = selectedOppAnswers.map((answer) => {
      return {
        ...answer,
        hr_comment: hrComment,
      };
    });

    setSelectedOppAnswers(updatedAnswers);
  };

  const onDelay = (event: React.MouseEvent) => {
    event.preventDefault();

    console.log('DELAYED!');
    // dispatch(recordDelay());
  };

  React.useEffect(() => {
    if (hrAnswers.length) {
      setShowMyReaction(Boolean(hrAnswers.length));
    }
  }, [hrAnswers.length, showMyReaction]);

  return (
    <div key={question_key} className="QuestionAndAnswers">
      <Heading marginTop="default" marginBottom="0.5rem" size={500}>
        <b>{question_text}</b>
        {isAnswered && (
          <Badge color="green" marginLeft="1rem">
            Answered
          </Badge>
        )}
      </Heading>
      <div className="QuestionBlock__Answers">
        <AnswerElementResolver
          selectedOpportunityAnswers={selectedOppAnswers}
          onSelect={onSelect}
          onTextInputChange={onTextInputChange}
          inputType={input_type}
          question={question}
          disabled={Boolean(hrAnswers.length)}
          hrAnswers={hrAnswers}
          // text from local state
          textOrNumericAnswer={
            question.input_type === 'number'
              ? numericAnswer?.toString().replace(/^0+/, '') || ''
              : textAnswer || ''
          }
        />
        <div className="QuestionBlock__ControlsAndDetails">
          <DetailsFromHR
            selectedOppAnswers={selectedOppAnswers}
            hrAnswers={hrAnswers}
            onHrTypes={onHrTypes}
            question={question}
            hrComment={hrComment}
          />

          <AnswerControls
            selectedOpportunityAnswers={selectedOppAnswers}
            answered={isAnswered}
            onConfirm={onConfirmAnswer}
            onDelay={onDelay}
            question={question}
          />

          {showMyReaction && (
            <div className="QuestionAndAnswers__Reaction">
              {/*{calculateMyReaction(hrAnswers, myAnswers)}*/}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
