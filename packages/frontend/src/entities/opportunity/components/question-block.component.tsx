import React from 'react';
import { InputTypes } from '../../../../../shared/src/types/entities.types';
import { Question } from '../../question/question.interface';
import { OpportunityAnswer } from '../current-opps.interface';

interface Props {
  questionsWithAnswers: Question[]; // how you answered iteration questions
  opportunityAnswers?: OpportunityAnswer[]; // HR's recorded answers to this opportunity
  questionCategoryTitle: string;
}

export const QuestionCategoryBlock: React.FC<Props> = ({
  questionCategoryTitle,
  questionsWithAnswers,
}) => {
  return (
    <div className="QuestionBlock">
      <h3>{questionCategoryTitle.toUpperCase()}</h3>
      {questionsWithAnswers.map((question) => {
        const { input_type, question_text, question_key } = question;

        const answers = resolveAnswerElement(input_type, question);

        return (
          <div key={question_key} className="QuestionBlock__AnswerArea">
            <p>
              <b>{question_text}</b>
            </p>

            {answers}
          </div>
        );
      })}
    </div>
  );
};

function resolveAnswerElement(inputType: InputTypes, question: Question) {
  let answers;

  if (inputType === 'select') {
    answers = (
      <select
        name={String(question.question_key)}
        id={String(question.question_key)}
      >
        {question.answers?.map((answer) => {
          return (
            <option value={String(answer.id)}>{answer.answer_text}</option>
          );
        })}
      </select>
    );
  }

  if (inputType === 'checkbox') {
    answers = (
      <label>
        {question.answers?.map((answer) => (
          <>
            <input type={inputType} name={`${answer.question_id}`} />
            {answer.answer_text}
          </>
        ))}
      </label>
    );
  }

  return (
    <div key={question.question_key} className="QuestionBlock__AnswerOption">
      {answers}
    </div>
  );
}
