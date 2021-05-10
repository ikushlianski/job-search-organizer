import React from 'react';
import { Heading, Pane, TextInput } from 'evergreen-ui';

export const FormIntroduction: React.FC = () => {
  return (
    <Pane elevation={1} padding="2rem" marginBottom="2rem">
      <div className="QuestionBlock">
        <div className="QuestionBlock__AnswerArea">
          <Heading marginTop="default" size={500}>
            <b>
              Please introduce yourself (so that I can contact you on LinkedIn)
            </b>
          </Heading>

          <TextInput type="text" name="contact_name" />
        </div>
      </div>

      <div className="QuestionBlock">
        <div className="QuestionBlock__AnswerArea">
          <Heading marginTop="default" size={500}>
            <b>What's the project name?</b>
          </Heading>
          <TextInput type="text" name="project_name" />
        </div>
      </div>

      <div className="QuestionBlock">
        <div className="QuestionBlock__AnswerArea">
          <Heading marginTop="default" size={500}>
            <b>What company works on this project?</b>
          </Heading>
          <TextInput type="text" name="company_name" />
        </div>
      </div>
    </Pane>
  );
};
