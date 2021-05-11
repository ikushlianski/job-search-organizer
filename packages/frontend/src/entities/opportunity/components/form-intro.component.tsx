import React from 'react';
import { Heading, Pane, TextInput } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { useAccessToken } from '../../../common/hooks/use-access-token.hook';
import { updateOpportunityDetails } from '../store/new-opp.action';
import { selectActiveIterationId } from '../../iteration/store/iteration.selector';
import { useParams } from 'react-router-dom';
import { OpportunityId } from '../../../routes/routes.interface';
import { selectActiveOpportunityState } from '../store/active-opp.selector';
import {
  setCompanyName,
  setContactName,
  setProjectName,
} from '../store/active-opp.reducer';

export const FormIntroduction: React.FC = () => {
  const [contact, setContact] = React.useState('');
  const [project, setProject] = React.useState('');
  const [company, setCompany] = React.useState('');

  const accessToken = useAccessToken();
  const { opportunityId } = useParams<OpportunityId>();
  const iterationId = useSelector(selectActiveIterationId);

  const {
    company_name: initialCompanyName,
    project_name: initialProjectName,
    contact_person_name: initialContactName,
  } = useSelector(selectActiveOpportunityState);

  const dispatch = useDispatch();

  const onContactChange = (data: string) => {
    setContact(data);
  };

  const onCompanyChange = (data: string) => {
    setCompany(data);
  };

  const onProjectChange = (data: string) => {
    setProject(data);
  };

  const saveProject = (project: string) => {
    dispatch(setProjectName(project));
    if (iterationId) {
      dispatch(
        updateOpportunityDetails({
          accessToken,
          iterationId,
          opportunityId: +opportunityId,
          data: {
            project_name: project || null,
          },
        }),
      );
    }
  };

  const saveContact = (contact: string) => {
    dispatch(setContactName(contact));
    if (iterationId) {
      dispatch(
        updateOpportunityDetails({
          accessToken,
          iterationId,
          opportunityId: +opportunityId,
          data: {
            contact_person_name: contact || null,
          },
        }),
      );
    }
  };

  const saveCompany = (company: string) => {
    dispatch(setCompanyName(company));
    if (iterationId) {
      dispatch(
        updateOpportunityDetails({
          accessToken,
          iterationId,
          opportunityId: +opportunityId,
          data: {
            company_name: company || null,
          },
        }),
      );
    }
  };

  const debounceSaveProject = React.useCallback(
    debounce(saveProject, 1000),
    [],
  );

  const debounceSaveContact = React.useCallback(
    debounce(saveContact, 1000),
    [],
  );

  const debounceSaveCompany = React.useCallback(
    debounce(saveCompany, 1000),
    [],
  );

  React.useEffect(() => {
    initialContactName && setContact(initialContactName);
    initialProjectName && setProject(initialProjectName);
    initialCompanyName && setCompany(initialCompanyName);
  }, [initialCompanyName, initialContactName, initialProjectName]);

  React.useEffect(() => {
    debounceSaveCompany(company);
  }, [company, debounceSaveCompany]);

  React.useEffect(() => {
    debounceSaveContact(contact);
  }, [contact, debounceSaveContact]);

  React.useEffect(() => {
    debounceSaveProject(project);
  }, [project, debounceSaveProject]);

  return (
    <Pane elevation={1} padding="2rem" marginBottom="2rem">
      <Pane
        fontSize={14}
        color={'grey'}
        background="blueTint"
        padding={'2rem'}
        marginBottom={16}
      >
        <p>
          If you don't know the answer now but can learn details later, just
          leave these questions unanswered. You can return to this form at any
          time by this same link
        </p>
        <p>
          For tech questions, I'd appreciate if you shared this link with the
          engineering team so they can provide precise answers.
        </p>
        <p>
          Please answer only if you are really sure the information is correct!
        </p>
        <p>
          Answers are saved on every confirm. Feel free to stop wherever you
          like. Thanks for your 🕒
        </p>
      </Pane>
      <div className="QuestionBlock">
        <div className="QuestionBlock__AnswerArea">
          <Heading marginTop="default" marginBottom="default" size={500}>
            <b>
              Please introduce yourself (so that I can contact you on LinkedIn)
            </b>
          </Heading>

          <TextInput
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onContactChange(event.target.value)
            }
            type="text"
            name="contact_name"
            value={contact}
          />
        </div>
      </div>

      <div className="QuestionBlock">
        <div className="QuestionBlock__AnswerArea">
          <Heading marginTop="default" marginBottom="default" size={500}>
            <b>What's the project name?</b>
          </Heading>
          <TextInput
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onProjectChange(event.target.value)
            }
            type="text"
            name="project_name"
            value={project}
          />
        </div>
      </div>

      <div className="QuestionBlock">
        <div className="QuestionBlock__AnswerArea">
          <Heading marginTop="default" marginBottom="default" size={500}>
            <b>What company works on this project?</b>
          </Heading>
          <TextInput
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onCompanyChange(event.target.value)
            }
            name="company_name"
            value={company}
          />
        </div>
      </div>
    </Pane>
  );
};
