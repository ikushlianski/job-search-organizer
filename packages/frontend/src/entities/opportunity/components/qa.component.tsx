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
import { selectIterationSettings } from '../../iteration/store/iteration.selector';
import { Reaction } from './reaction.component';

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

  const [numericAnswer, setNumericAnswer] = React.useState(
    hrAnswers[0]?.numeric_answer,
  );

  const [selectedOppAnswers, setSelectedOppAnswers] = React.useState(hrAnswers);

  const [showMyReaction, setShowMyReaction] = React.useState(false);
  const [hrComment, setHrComment] = React.useState('');

  const dispatch = useDispatch();
  const accessToken = useAccessToken();
  const { activeOpportunityId } = useSelector(selectActiveOpportunityState);
  const iterationSettings = useSelector(selectIterationSettings);

  const iterSettingsForThisQ = iterationSettings?.filter(
    (setting) => setting.question_id === question.id,
  );

  const { input_type, question_text, question_key } = question;
  const isAnswered = hrAnswers.length > 0;

  React.useEffect(() => {
    setNumericAnswer(hrAnswers[0]?.numeric_answer);
  }, [hrAnswers.length]);

  const onTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (question.input_type === 'number') {
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

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answerId = +event.target.value;

    console.log('onSelect: answerId', answerId);
    console.dir(event.target);

    if (isNaN(answerId)) {
      console.debug('answerId is NaN');

      return;
    }

    const alreadySelectedAnswerIds = selectedOppAnswers.map((a) => a.answer_id);

    if (alreadySelectedAnswerIds.includes(answerId)) {
      setSelectedOppAnswers((prev) =>
        prev.filter((answer) => answer.answer_id !== answerId),
      );

      return;
    }

    const newOpportunityAnswer: OpportunityAnswer = {
      opportunity_id: Number(activeOpportunityId),
      answer_id: answerId,
      question_id: question.id,
      hr_comment: hrComment,
      my_comment: hrAnswers.find((a) => a.answer_id === answerId)?.my_comment,
      is_delayed: undefined,
      delayed_date: undefined,
    };

    if (question.input_type === 'checkbox') {
      setSelectedOppAnswers((prev) => [...prev, newOpportunityAnswer]);
    } else {
      setSelectedOppAnswers([newOpportunityAnswer]);
    }
  };

  const onConfirmAnswer = (event: React.MouseEvent) => {
    event.preventDefault();

    const hasAnswers = selectedOppAnswers.length > 0;

    const optionsArePossible =
      question.input_type === 'radio' ||
      question.input_type === 'checkbox' ||
      question.input_type === 'select';

    if (activeOpportunityId && (hasAnswers || !optionsArePossible)) {
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
    console.log('showmyreaction', showMyReaction);
  }, [showMyReaction]);

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
      <div
        className={`QuestionBlock__Answers ${
          hrAnswers.length > 0 && `QuestionBlock__Answers--verticallyCentered`
        }`}
      >
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
              <Reaction
                iterationSettingsForQ={iterSettingsForThisQ}
                answers={hrAnswers}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
