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
}
export const AnswerElementResolver: React.FC<Props> = ({
  inputType,
  question,
  hrAnswers,
  disabled,
  onSelect,
  selectedOpportunityAnswers,
}) => {
  // React.useEffect(() => {
  //   console.log('checkedId', checkedId);
  // }, [checkedId]);

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

// interface RadioBtnProps {
//   answer: Answer;
//   hrAnswers: OpportunityAnswer[];
//   disabled: boolean;
//   defaultChecked: boolean;
//   onChange: (value: number) => void;
//   checkedId: number;
// }

// const RadioBtn: React.FC<RadioBtnProps> = ({
//   defaultChecked,
//   hrAnswers,
//   answer,
//   disabled,
//   onChange,
//   checkedId,
// }) => {
//   console.log('defaultChecked', defaultChecked);
//
//   return (
//     <div key={answer.id} className="SingleOption">
//       <Radio
//         defaultChecked={defaultChecked}
//         onChange={() => onChange(answer.id)}
//         checked={disabled ? defaultChecked : checkedId === answer.id}
//         disabled={disabled}
//         name={`${answer.id}`}
//         label={answer.answer_text}
//         size={16}
//         value={`${answer.id}`}
//       />
//     </div>
//   );
// };
