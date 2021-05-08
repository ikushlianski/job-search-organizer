import React from 'react';
import { Question } from '../../../question/question.interface';

interface Props {
  questions: Question[];
  title: string;
}

export const QuestionBlock: React.FC<Props> = ({ title, questions }) => {
  return (
    <div className="QuestionBlock">
      <h3>{title.toUpperCase()}</h3>
      {questions.map((question) => {
        return (
          <div key={question.id} className="QuestionBlock__AnswerArea">
            <p>{question.question_text}</p>
            {question.answers.map((answer) => (
              <div key={answer.id} className="QuestionBlock__AnswerOption">
                <label>
                  {question.is_multi_choice ? (
                    <input type="checkbox" />
                  ) : (
                    <input type="radio" name={`${answer.question_id}`} />
                  )}
                  {answer.answer_text}
                </label>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
