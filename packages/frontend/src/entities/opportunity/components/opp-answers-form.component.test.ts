import { iterationSettingsToQA } from '../utils/iter-settings-to-qa.util';

describe('buildQAInCategory()', function () {
  it('should pass', () => {
    const result = iterationSettingsToQA('company', {
      iterationSettings: {
        company: [
          {
            id: 1,
            iteration_id: 1,
            question_id: 1,
            answer_id: 1,
            boolean_answer: true,
            numeric_answer: null,
            string_answer: null,
            weight: 1,
            iteration: {
              id: 1,
              start_date: '2021-01-01',
              final_date: '2021-08-31',
              name: 'test-iteration',
              user_id: 1,
            },
            question: {
              id: 1,
              question_key: 'office_location',
              question_text: 'Is office location suitable for me?',
              question_category_id: 2,
              user_id: -1,
              input_type: 'radio',
              question_category: {
                id: 2,
                category_name: 'company',
              },
            },
            answer: {
              id: 1,
              answer_text: 'Near me',
              question_id: 1,
              user_id: -1,
            },
          },
          {
            id: 2,
            iteration_id: 1,
            question_id: 1,
            answer_id: 2,
            boolean_answer: true,
            numeric_answer: null,
            string_answer: null,
            weight: 0.5,
            iteration: {
              id: 1,
              start_date: '2021-01-01',
              final_date: '2021-08-31',
              name: 'test-iteration',
              user_id: 1,
            },
            question: {
              id: 1,
              question_key: 'office_location',
              question_text: 'Is office location suitable for me?',
              question_category_id: 2,
              user_id: -1,
              input_type: 'radio',
              question_category: {
                id: 2,
                category_name: 'company',
              },
            },
            answer: {
              id: 2,
              answer_text: 'Quite suitable',
              question_id: 1,
              user_id: -1,
            },
          },
          {
            id: 4,
            iteration_id: 1,
            question_id: 6,
            answer_id: null,
            boolean_answer: null,
            numeric_answer: 3000,
            string_answer: null,
            weight: null,
            iteration: {
              id: 1,
              start_date: '2021-01-01',
              final_date: '2021-08-31',
              name: 'test-iteration',
              user_id: 1,
            },
            question: {
              id: 6,
              question_key: 'min_salary',
              question_text:
                'What is the minimum salary you would accept this time?',
              question_category_id: 1,
              user_id: -1,
              input_type: 'range',
              question_category: {
                id: 1,
                category_name: 'financial',
              },
            },
            answer: null,
          },
          {
            id: 3,
            iteration_id: 1,
            question_id: 5,
            answer_id: null,
            boolean_answer: null,
            numeric_answer: 3500,
            string_answer: null,
            weight: null,
            iteration: {
              id: 1,
              start_date: '2021-01-01',
              final_date: '2021-08-31',
              name: 'test-iteration',
              user_id: 1,
            },
            question: {
              id: 5,
              question_key: 'net_salary',
              question_text: 'What net salary would you prefer?',
              question_category_id: 1,
              user_id: -1,
              input_type: 'range',
              question_category: {
                id: 1,
                category_name: 'financial',
              },
            },
            answer: null,
          },
        ],
        financial: [
          {
            id: 5,
            iteration_id: 1,
            question_id: 9,
            answer_id: 12,
            boolean_answer: null,
            numeric_answer: null,
            string_answer: null,
            weight: 1,
            iteration: {
              id: 1,
              start_date: '2021-01-01',
              final_date: '2021-08-31',
              name: 'test-iteration',
              user_id: 1,
            },
            question: {
              id: 9,
              question_key: 'is_legacy',
              question_text: 'Are legacy technologies involved?',
              question_category_id: 3,
              user_id: -1,
              input_type: 'radio',
              question_category: {
                id: 3,
                category_name: 'project',
              },
            },
            answer: {
              id: 12,
              answer_text: 'No, only new technologies',
              question_id: 9,
              user_id: -1,
            },
          },
        ],
      },
      answersByQuestion: {
        '1': [
          {
            id: 1,
            answer_text: 'Near me',
            question_id: 1,
            user_id: -1,
          },
          {
            id: 2,
            answer_text: 'Quite suitable',
            question_id: 1,
            user_id: -1,
          },
          {
            id: 3,
            answer_text: 'Not so suitable',
            question_id: 1,
            user_id: -1,
          },
          {
            id: 4,
            answer_text: 'Very far from me',
            question_id: 1,
            user_id: -1,
          },
        ],
        '3': [
          {
            id: 5,
            answer_text: 'Very few',
            question_id: 3,
            user_id: -1,
          },
          {
            id: 6,
            answer_text: 'Not many',
            question_id: 3,
            user_id: -1,
          },
          {
            id: 7,
            answer_text: 'Quite a few',
            question_id: 3,
            user_id: -1,
          },
          {
            id: 8,
            answer_text: 'A lot',
            question_id: 3,
            user_id: -1,
          },
        ],
        '4': [
          {
            id: 9,
            answer_text: 'Only in BYN',
            question_id: 4,
            user_id: -1,
          },
          {
            id: 10,
            answer_text: 'Possible in USD',
            question_id: 4,
            user_id: -1,
          },
          {
            id: 11,
            answer_text: 'Possible in EUR',
            question_id: 4,
            user_id: -1,
          },
        ],
        '9': [
          {
            id: 12,
            answer_text: 'No, only new technologies',
            question_id: 9,
            user_id: -1,
          },
          {
            id: 13,
            answer_text: 'Yes, but not you will not face them',
            question_id: 9,
            user_id: -1,
          },
          {
            id: 14,
            answer_text: 'Yes, some part is legacy',
            question_id: 9,
            user_id: -1,
          },
          {
            id: 15,
            answer_text: 'Whole project is legacy',
            question_id: 9,
            user_id: -1,
          },
        ],
        '10': [
          {
            id: 16,
            answer_text: 'Whole project is completely from scratch',
            question_id: 10,
            user_id: -1,
          },
          {
            id: 17,
            answer_text: 'Some part of project is from scratch',
            question_id: 10,
            user_id: -1,
          },
          {
            id: 18,
            answer_text: 'Project will be re-written as new',
            question_id: 10,
            user_id: -1,
          },
          {
            id: 19,
            answer_text: 'No, project has been going on for some months',
            question_id: 10,
            user_id: -1,
          },
          {
            id: 20,
            answer_text: 'No, project has been going on for a year',
            question_id: 10,
            user_id: -1,
          },
          {
            id: 21,
            answer_text: 'No, project has been going on for several years',
            question_id: 10,
            user_id: -1,
          },
        ],
        '11': [
          {
            id: 22,
            answer_text: 'No, the project is new',
            question_id: 11,
            user_id: -1,
          },
          {
            id: 23,
            answer_text:
              'Yes, partially. You will not have to dive into old code',
            question_id: 11,
            user_id: -1,
          },
          {
            id: 24,
            answer_text: 'Yes, partially. You will work with old code',
            question_id: 11,
            user_id: -1,
          },
          {
            id: 25,
            answer_text: 'Yes, full rewrite. You will work with old code',
            question_id: 11,
            user_id: -1,
          },
        ],
        '12': [
          {
            id: 26,
            answer_text: 'Node.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 27,
            answer_text: 'Javascript',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 28,
            answer_text: 'Typescript',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 29,
            answer_text: 'React.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 30,
            answer_text: 'NEXT.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 31,
            answer_text: 'Angular 2+',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 32,
            answer_text: 'Angular 1 (Angular.js)',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 33,
            answer_text: 'HTML/CSS',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 34,
            answer_text: 'Vue.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 35,
            answer_text: 'PHP',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 36,
            answer_text: 'Java',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 37,
            answer_text: '.NET',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 38,
            answer_text: 'Docker',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 39,
            answer_text: 'AWS',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 40,
            answer_text: 'Azure',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 41,
            answer_text: 'Google Cloud Platform',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 42,
            answer_text: 'Apache Kafka',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 43,
            answer_text: 'Microservices',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 44,
            answer_text: 'RabbitMQ',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 45,
            answer_text: 'Express.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 46,
            answer_text: 'Nest.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 47,
            answer_text: 'Loopback',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 48,
            answer_text: 'Koa.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 49,
            answer_text: 'Hapi.js',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 50,
            answer_text: 'Postgres',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 51,
            answer_text: 'MySQL',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 52,
            answer_text: 'MongoDB',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 53,
            answer_text: 'Mongoose',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 54,
            answer_text: 'Oracle',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 55,
            answer_text: 'TypeORM',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 56,
            answer_text: 'Sequelize',
            question_id: 12,
            user_id: -1,
          },
          {
            id: 57,
            answer_text: 'RxJS',
            question_id: 12,
            user_id: -1,
          },
        ],
        '13': [
          {
            id: 67,
            answer_text: 'Yes, fully remote, even after COVID',
            question_id: 13,
            user_id: -1,
          },
          {
            id: 68,
            answer_text: 'Remote during COVID, we will see in the future',
            question_id: 13,
            user_id: -1,
          },
          {
            id: 69,
            answer_text:
              'Remote during COVID, then you will have to work from office',
            question_id: 13,
            user_id: -1,
          },
          {
            id: 70,
            answer_text: 'Work is only from office',
            question_id: 13,
            user_id: -1,
          },
        ],
        '14': [
          {
            id: 101,
            answer_text: 'Real estate',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 102,
            answer_text: 'E-commerce',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 103,
            answer_text: 'Healthcare',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 104,
            answer_text: 'Travel',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 105,
            answer_text: 'Education',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 106,
            answer_text: 'Lifestyle',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 107,
            answer_text: 'Sport',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 108,
            answer_text: 'Gambling',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 109,
            answer_text: 'Online games',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 110,
            answer_text: 'Finance',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 111,
            answer_text: 'Cryptocurrencies',
            question_id: 14,
            user_id: -1,
          },
          {
            id: 112,
            answer_text: 'Other',
            question_id: 14,
            user_id: -1,
          },
        ],
        '15': [
          {
            id: 83,
            answer_text: 'Outsource',
            question_id: 15,
            user_id: -1,
          },
          {
            id: 84,
            answer_text: 'Outstaffing',
            question_id: 15,
            user_id: -1,
          },
          {
            id: 85,
            answer_text: 'Mixed outsource and outstaffing',
            question_id: 15,
            user_id: -1,
          },
          {
            id: 86,
            answer_text: 'We are a product company',
            question_id: 15,
            user_id: -1,
          },
        ],
        '16': [
          {
            id: 87,
            answer_text: 'From USA',
            question_id: 16,
            user_id: -1,
          },
          {
            id: 88,
            answer_text: 'From UK',
            question_id: 16,
            user_id: -1,
          },
          {
            id: 89,
            answer_text: 'From Europe',
            question_id: 16,
            user_id: -1,
          },
          {
            id: 90,
            answer_text: 'From Asia',
            question_id: 16,
            user_id: -1,
          },
          {
            id: 91,
            answer_text: 'From Russia',
            question_id: 16,
            user_id: -1,
          },
          {
            id: 92,
            answer_text: 'From Belarus',
            question_id: 16,
            user_id: -1,
          },
        ],
        '18': [
          {
            id: 58,
            answer_text: 'Frontend only',
            question_id: 18,
            user_id: -1,
          },
          {
            id: 59,
            answer_text: 'Frontend, with some backend',
            question_id: 18,
            user_id: -1,
          },
          {
            id: 60,
            answer_text: 'Backend only',
            question_id: 18,
            user_id: -1,
          },
          {
            id: 61,
            answer_text: 'Backend, with some frontend',
            question_id: 18,
            user_id: -1,
          },
          {
            id: 62,
            answer_text:
              'Full-stack, with almost equal amount of frontend and backend effort',
            question_id: 18,
            user_id: -1,
          },
        ],
        '19': [
          {
            id: 113,
            answer_text: '1-2',
            question_id: 19,
            user_id: -1,
          },
          {
            id: 114,
            answer_text: '3-4',
            question_id: 19,
            user_id: -1,
          },
          {
            id: 115,
            answer_text: '5-7',
            question_id: 19,
            user_id: -1,
          },
          {
            id: 116,
            answer_text: '8-12',
            question_id: 19,
            user_id: -1,
          },
          {
            id: 117,
            answer_text: '13-20',
            question_id: 19,
            user_id: -1,
          },
          {
            id: 118,
            answer_text: '21+',
            question_id: 19,
            user_id: -1,
          },
        ],
        '20': [
          {
            id: 119,
            answer_text: '1-10',
            question_id: 20,
            user_id: -1,
          },
          {
            id: 120,
            answer_text: '11-20',
            question_id: 20,
            user_id: -1,
          },
          {
            id: 121,
            answer_text: '21-30',
            question_id: 20,
            user_id: -1,
          },
          {
            id: 122,
            answer_text: '31-50',
            question_id: 20,
            user_id: -1,
          },
          {
            id: 123,
            answer_text: '51-100',
            question_id: 20,
            user_id: -1,
          },
          {
            id: 124,
            answer_text: '100+',
            question_id: 20,
            user_id: -1,
          },
        ],
        '21': [
          {
            id: 71,
            answer_text: 'Project manager',
            question_id: 21,
            user_id: -1,
          },
          {
            id: 72,
            answer_text: 'Business Analyst',
            question_id: 21,
            user_id: -1,
          },
          {
            id: 73,
            answer_text: 'Team Lead',
            question_id: 21,
            user_id: -1,
          },
          {
            id: 74,
            answer_text: 'Tech Lead',
            question_id: 21,
            user_id: -1,
          },
          {
            id: 75,
            answer_text: 'Solution Architect',
            question_id: 21,
            user_id: -1,
          },
          {
            id: 76,
            answer_text: 'Developer/Software Engineer',
            question_id: 21,
            user_id: -1,
          },
        ],
        '22': [
          {
            id: 77,
            answer_text: 'Trainee',
            question_id: 22,
            user_id: -1,
          },
          {
            id: 78,
            answer_text: 'Junior',
            question_id: 22,
            user_id: -1,
          },
          {
            id: 79,
            answer_text: 'Middle',
            question_id: 22,
            user_id: -1,
          },
          {
            id: 80,
            answer_text: 'Senior',
            question_id: 22,
            user_id: -1,
          },
          {
            id: 81,
            answer_text: 'Lead',
            question_id: 22,
            user_id: -1,
          },
          {
            id: 82,
            answer_text: 'Chief/Principal',
            question_id: 22,
            user_id: -1,
          },
        ],
        '23': [
          {
            id: 63,
            answer_text: 'Required, as we do not have a dedicated devOps',
            question_id: 23,
            user_id: -1,
          },
          {
            id: 64,
            answer_text:
              'Required, but only the development part of CI/CD. Other things are handled by a dedicated devOps',
            question_id: 23,
            user_id: -1,
          },
          {
            id: 65,
            answer_text:
              'Almost not required, as devOps handle most of CI/CD activities',
            question_id: 23,
            user_id: -1,
          },
          {
            id: 66,
            answer_text:
              'Not required at all, devOps handle all of CI/CD activities',
            question_id: 23,
            user_id: -1,
          },
        ],
        '24': [
          {
            id: 125,
            answer_text: 'Yes, BA is fully responsible for stories',
            question_id: 24,
            user_id: -1,
          },
          {
            id: 126,
            answer_text:
              'Yes, BA is responsible for stories, but developers need to talk to customer as well',
            question_id: 24,
            user_id: -1,
          },
          {
            id: 127,
            answer_text:
              'No dedicated BA, developers need to talk to customer and create tickets',
            question_id: 24,
            user_id: -1,
          },
          {
            id: 128,
            answer_text: 'Customer creates tickets on their own',
            question_id: 24,
            user_id: -1,
          },
        ],
        '25': [
          {
            id: 129,
            answer_text:
              'No communication at all. Everything is handled by someone else',
            question_id: 25,
            user_id: -1,
          },
          {
            id: 130,
            answer_text: 'Rarely, only in chat or via emails',
            question_id: 25,
            user_id: -1,
          },
          {
            id: 131,
            answer_text:
              'Sometimes needed, including live meetings with customer',
            question_id: 25,
            user_id: -1,
          },
          {
            id: 132,
            answer_text:
              'Yes, live meetings and chat/email communication happens almost every day',
            question_id: 25,
            user_id: -1,
          },
        ],
        '26': [
          {
            id: 133,
            answer_text: 'Yes, all Scrum ceremonies are observed',
            question_id: 26,
            user_id: -1,
          },
          {
            id: 134,
            answer_text: 'Yes, some Scrum ceremonies are observed',
            question_id: 26,
            user_id: -1,
          },
          {
            id: 135,
            answer_text: 'Only a couple of Scrum ceremonies are observed',
            question_id: 26,
            user_id: -1,
          },
          {
            id: 136,
            answer_text: 'No, we use Kanban',
            question_id: 26,
            user_id: -1,
          },
          {
            id: 137,
            answer_text: 'We do not use any methodology for now',
            question_id: 26,
            user_id: -1,
          },
        ],
        '27': [
          {
            id: 138,
            answer_text: 'No tracking',
            question_id: 27,
            user_id: -1,
          },
          {
            id: 139,
            answer_text: 'Yes, you need to log time in company tools',
            question_id: 27,
            user_id: -1,
          },
          {
            id: 140,
            answer_text:
              'Yes, you need to log time twice, using both company and customer tools',
            question_id: 27,
            user_id: -1,
          },
          {
            id: 141,
            answer_text:
              'Special screen tracking software is used to control team member activities',
            question_id: 27,
            user_id: -1,
          },
        ],
        '28': [
          {
            id: 142,
            answer_text: 'Once a week',
            question_id: 28,
            user_id: -1,
          },
          {
            id: 143,
            answer_text: 'Once a sprint',
            question_id: 28,
            user_id: -1,
          },
          {
            id: 144,
            answer_text: 'Once a month',
            question_id: 28,
            user_id: -1,
          },
          {
            id: 145,
            answer_text: 'Once in several months',
            question_id: 28,
            user_id: -1,
          },
          {
            id: 146,
            answer_text: 'Releases have not happened yet',
            question_id: 28,
            user_id: -1,
          },
        ],
        '29': [
          {
            id: 147,
            answer_text: 'Yes, and we do not map story points to days or hours',
            question_id: 29,
            user_id: -1,
          },
          {
            id: 148,
            answer_text: 'Yes, but we map story points to days or hours',
            question_id: 29,
            user_id: -1,
          },
          {
            id: 149,
            answer_text: 'No, we estimate in days or hours',
            question_id: 29,
            user_id: -1,
          },
        ],
        '30': [
          {
            id: 150,
            answer_text: 'Several years at least',
            question_id: 30,
            user_id: -1,
          },
          {
            id: 151,
            answer_text: 'One year at least',
            question_id: 30,
            user_id: -1,
          },
          {
            id: 152,
            answer_text: 'Up to one year',
            question_id: 30,
            user_id: -1,
          },
          {
            id: 153,
            answer_text: 'Finishes in a couple of months',
            question_id: 30,
            user_id: -1,
          },
        ],
        '31': [
          {
            id: 154,
            answer_text: 'To replace a developer who is about to leave',
            question_id: 31,
            user_id: -1,
          },
          {
            id: 155,
            answer_text: 'Team is expanding',
            question_id: 31,
            user_id: -1,
          },
          {
            id: 156,
            answer_text: 'Project is about to start, we are gathering the team',
            question_id: 31,
            user_id: -1,
          },
        ],
        '32': [
          {
            id: 157,
            answer_text: 'Never',
            question_id: 32,
            user_id: -1,
          },
          {
            id: 158,
            answer_text: 'Might happen once a month',
            question_id: 32,
            user_id: -1,
          },
          {
            id: 159,
            answer_text: 'Might happen once a week',
            question_id: 32,
            user_id: -1,
          },
          {
            id: 160,
            answer_text: 'Happen often',
            question_id: 32,
            user_id: -1,
          },
          {
            id: 161,
            answer_text:
              'Happen almost every day, but this is going to end soon',
            question_id: 32,
            user_id: -1,
          },
          {
            id: 162,
            answer_text:
              'Happen almost every day and things are unlikely to change',
            question_id: 32,
            user_id: -1,
          },
        ],
        '33': [
          {
            id: 93,
            answer_text: 'Large company',
            question_id: 33,
            user_id: -1,
          },
          {
            id: 94,
            answer_text: 'Medium-sized company',
            question_id: 33,
            user_id: -1,
          },
          {
            id: 95,
            answer_text: 'Small business',
            question_id: 33,
            user_id: -1,
          },
          {
            id: 96,
            answer_text: 'Startup',
            question_id: 33,
            user_id: -1,
          },
        ],
        '34': [
          {
            id: 97,
            answer_text: 'B2B',
            question_id: 34,
            user_id: -1,
          },
          {
            id: 98,
            answer_text: 'B2C',
            question_id: 34,
            user_id: -1,
          },
          {
            id: 99,
            answer_text: 'C2C',
            question_id: 34,
            user_id: -1,
          },
          {
            id: 100,
            answer_text: 'Other',
            question_id: 34,
            user_id: -1,
          },
        ],
        '35': [
          {
            id: 163,
            answer_text: 'Jira',
            question_id: 35,
            user_id: -1,
          },
          {
            id: 164,
            answer_text: 'YouTrack',
            question_id: 35,
            user_id: -1,
          },
          {
            id: 165,
            answer_text: 'Pivotal Tracker',
            question_id: 35,
            user_id: -1,
          },
          {
            id: 166,
            answer_text: 'Trello',
            question_id: 35,
            user_id: -1,
          },
          {
            id: 167,
            answer_text: 'Asana',
            question_id: 35,
            user_id: -1,
          },
          {
            id: 168,
            answer_text: 'Other',
            question_id: 35,
            user_id: -1,
          },
        ],
        '36': [
          {
            id: 169,
            answer_text:
              'No, our laptops are 16GB by default, cannot be changed',
            question_id: 36,
            user_id: -1,
          },
          {
            id: 170,
            answer_text:
              'No, our laptops are 16GB by default, 32GB can be requested per project need',
            question_id: 36,
            user_id: -1,
          },
          {
            id: 171,
            answer_text: 'Yes, 32GB is given you by default',
            question_id: 36,
            user_id: -1,
          },
        ],
        '37': [
          {
            id: 172,
            answer_text: 'Yes, we install Linux by default',
            question_id: 37,
            user_id: -1,
          },
          {
            id: 173,
            answer_text: 'Not by default, but we can install it for you',
            question_id: 37,
            user_id: -1,
          },
          {
            id: 174,
            answer_text:
              'We only use Windows machines, but you can install Linux on your own',
            question_id: 37,
            user_id: -1,
          },
          {
            id: 175,
            answer_text:
              'We only use Windows machines, custom Linux installation is impossible',
            question_id: 37,
            user_id: -1,
          },
          {
            id: 176,
            answer_text: 'We only use MacOS',
            question_id: 37,
            user_id: -1,
          },
        ],
        '38': [
          {
            id: 177,
            answer_text: 'Yes, software licences can be given',
            question_id: 38,
            user_id: -1,
          },
          {
            id: 178,
            answer_text: 'No, but you can use your own licenced software',
            question_id: 38,
            user_id: -1,
          },
          {
            id: 179,
            answer_text: 'No',
            question_id: 38,
            user_id: -1,
          },
        ],
      },
    });

    console.log('result ----->', JSON.stringify(result, null, 4));
  });
});
