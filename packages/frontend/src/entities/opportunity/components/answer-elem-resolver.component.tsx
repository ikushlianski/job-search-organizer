import React from 'react';
import { InputTypes } from '@job-search-organizer/shared/src/types/entities.types';
import { Question } from '../../question/question.interface';
import { Checkbox, Radio, TextInput } from 'evergreen-ui';

import './answer-elem-resolver.scss';
import { OpportunityAnswer } from '../current-opps.interface';

interface Props {
  inputType: InputTypes;
  question: Question;
  hrAnswers: OpportunityAnswer[]; // came from backend
  selectedOpportunityAnswers: OpportunityAnswer[]; // our changes to these answers on frontend
  disabled: boolean;
  onSelect: (e: React.ChangeEvent, data: number[]) => void;
  onTextInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textOrNumericAnswer: string | number;
}
export const AnswerElementResolver: React.FC<Props> = ({
  inputType,
  question,
  hrAnswers,
  disabled,
  onSelect,
  onTextInputChange,
  selectedOpportunityAnswers,
  textOrNumericAnswer, // text from local state
}) => {
  let answers;

  if (inputType === 'select') {
    answers = (
      <select
        name={String(question.question_key)}
        id={String(question.question_key)}
        disabled={disabled}
      >
        {question.answers?.map((answer) => {
          const selected = Boolean(
            hrAnswers.find((hrAnswer) => hrAnswer.answer_id === answer.id),
          );

          return (
            <option
              onChange={console.log}
              selected={selected}
              key={answer.id}
              value={String(answer.id)}
            >
              {answer.answer_text}
            </option>
          );
        })}
      </select>
    );
  } else {
    if (question?.answers?.length) {
      if (question.input_type === 'checkbox') {
        answers = answers = question.answers?.map((answer) => {
          const defaultChecked = hrAnswers.some(
            (hrAnswer) => hrAnswer.answer_id === answer.id,
          );

          const checkedId = selectedOpportunityAnswers.find(
            (selectedAnswer) => selectedAnswer.answer_id === answer.id,
          )?.answer_id;

          return (
            <div key={answer.id} className="SingleOption">
              <Checkbox
                defaultChecked={defaultChecked}
                onChange={(e) => onSelect(e, [answer.id])}
                checked={disabled ? defaultChecked : checkedId === answer.id}
                disabled={disabled}
                name={`${answer.question_id}`}
                label={answer.answer_text}
              />
            </div>
          );
        });
      } else if (question.input_type === 'radio') {
        answers = answers = question.answers?.map((answer) => {
          const defaultChecked = hrAnswers.some(
            (hrAnswer) => hrAnswer.answer_id === answer.id,
          );

          const checkedId = selectedOpportunityAnswers.find(
            (selectedAnswer) => selectedAnswer.answer_id === answer.id,
          )?.answer_id;

          return (
            <Radio
              key={answer.id}
              defaultChecked={defaultChecked}
              onChange={(e) => onSelect(e, [answer.id])}
              checked={disabled ? defaultChecked : checkedId === answer.id}
              disabled={disabled}
              name={`${answer.id}`}
              label={answer.answer_text}
              size={16}
              value={`${answer.id}`}
            />
          );
        });
      } else {
        answers = answers = question.answers?.map((answer) => (
          <div key={answer.id} className="SingleOption">
            <label>
              <input
                // onChange={onTextInputChange}
                disabled={disabled}
                type={inputType}
                name={`${answer.question_id}`}
              />
              {answer.answer_text}{' '}
            </label>
          </div>
        ));
      }
    } else {
      // plain string or number answers, without options
      answers = (
        <div className="SingleOption">
          <label>
            {question.input_type === 'number' ? (
              // NUMERIC INPUT
              <TextInput
                disabled={Boolean(hrAnswers[0]?.numeric_answer)}
                type={inputType}
                name={`${question.id}`}
                onChange={onTextInputChange}
                value={textOrNumericAnswer}
              />
            ) : (
              // TEXT INPUT
              <TextInput
                disabled={Boolean(hrAnswers[0]?.string_answer)}
                type={inputType}
                name={`${question.id}`}
                onChange={onTextInputChange}
                value={textOrNumericAnswer}
              />
            )}
          </label>
        </div>
      );
    }
  }

  return <div className="QuestionBlock__Options">{answers}</div>;
};
