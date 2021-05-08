import React from 'react';
import { Question } from '../../../question/question.interface';

interface Props {
  questions: Question[];
  title: string;
}

export const QuestionBlock: React.FC<Props> = ({ title, questions }) => {
  return (
    <div className="QuestionBlock">
      <p>{title}</p>
      {questions.map((question) => {
        return (
          <div>
            <p>{question.question_text}</p>
            <div className="QuestionBlock__AnswerArea">
              {question.answers.map((answer) => (
                <div className="QuestionBlock__AnswerOption">
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
          </div>
        );
      })}
    </div>
  );
};
