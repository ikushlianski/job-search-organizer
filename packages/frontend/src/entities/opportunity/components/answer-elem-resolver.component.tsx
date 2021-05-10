import React from 'react';
import { InputTypes } from '@job-search-organizer/shared/src/types/entities.types';
import { Question } from '../../question/question.interface';
import { Checkbox, Radio, TextInput } from 'evergreen-ui';

import './answer-elem-resolver.scss';
import { OpportunityAnswer } from '../current-opps.interface';

interface Props {
  inputType: InputTypes;
  question: Question;
  hrAnswers: OpportunityAnswer[];
  disabled: boolean;
}
export const AnswerElementResolver: React.FC<Props> = ({
  inputType,
  question,
  hrAnswers,
  disabled,
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
            hrAnswers.find((hrAnswer) => hrAnswer.answer_id === answer.id) ||
              undefined,
          );

          return (
            <option
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
          // if we just left `checked` as false, React would not allow us to check the checkbox at all
          const checked = Boolean(
            hrAnswers.find((hrAnswer) => hrAnswer.answer_id === answer.id) ||
              undefined,
          );

          return (
            <div key={answer.id} className="SingleOption">
              <Checkbox
                checked={checked}
                disabled={disabled}
                name={`${answer.question_id}`}
                label={answer.answer_text}
              />
            </div>
          );
        });
      } else if (question.input_type === 'radio') {
        answers = answers = question.answers?.map((answer) => {
          // if we didn't use undefined as a fallback, React would not allow us to check the radio button at all
          const checked =
            Boolean(
              hrAnswers.find((hrAnswer) => hrAnswer.answer_id === answer.id),
            ) || undefined;

          return (
            <div key={answer.id} className="SingleOption">
              <Radio
                checked={checked}
                disabled={disabled}
                name={`${answer.question_id}`}
                label={answer.answer_text}
                size={16}
              />
            </div>
          );
        });
      } else {
        answers = answers = question.answers?.map((answer) => (
          <div key={answer.id} className="SingleOption">
            <label>
              <input
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
      answers = (
        <div className="SingleOption">
          <label>
            <TextInput
              // no disabled attribute in open question answers
              type={inputType}
              name={`${question.id}`}
            />
          </label>
        </div>
      );
    }
  }

  return <div className="QuestionBlock__Options">{answers}</div>;
};
