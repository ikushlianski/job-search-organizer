'use strict';

module.exports = {
  up: async (queryInterface) => {
    const [questions] = await queryInterface.sequelize.query(
      `select q.*, cat.category_name from public.jso_question q
           join public.jso_question_category cat on q.question_category_id = cat.id`,
    );

    const questionsByKey = questions.reduce((acc, cur) => {
      acc[cur['question_key']] = cur;

      return acc;
    }, {});

    await queryInterface.sequelize.query(`
      insert into public.jso_answer
      (question_id, answer_text)
      VALUES
      
      -- COMPANY --
      (${questionsByKey['office_location'].id}, 'Near me'),
      (${questionsByKey['office_location'].id}, 'Quite suitable'),
      (${questionsByKey['office_location'].id}, 'Not so suitable'),
      (${questionsByKey['office_location'].id}, 'Very far from me'),
      
      (${questionsByKey['company_project_count'].id}, 'Very few'),
      (${questionsByKey['company_project_count'].id}, 'Not many'),
      (${questionsByKey['company_project_count'].id}, 'Quite a few'),
      (${questionsByKey['company_project_count'].id}, 'A lot'),
     
      (${questionsByKey['salary_currency'].id}, 'Only in BYN'),
      (${questionsByKey['salary_currency'].id}, 'Possible in USD'),
      (${questionsByKey['salary_currency'].id}, 'Possible in EUR'),
      
      (${questionsByKey['paid_leave_day_count'].id}, '15-20'),
      (${questionsByKey['paid_leave_day_count'].id}, '21-24'),
      (${questionsByKey['paid_leave_day_count'].id}, '24-27'),
      (${questionsByKey['paid_leave_day_count'].id}, '28+'),
      
      
      
      -- PROJECT: CODE --
      (${questionsByKey['is_legacy'].id}, 'No, only new technologies'),
      (${questionsByKey['is_legacy'].id}, 'Yes, but not you will not face them'),
      (${questionsByKey['is_legacy'].id}, 'Yes, some part is legacy'),
      (${questionsByKey['is_legacy'].id}, 'Whole project is legacy'),
      
      (${questionsByKey['is_new'].id}, 'Whole project is completely from scratch'),
      (${questionsByKey['is_new'].id}, 'Some part of project is from scratch'),
      (${questionsByKey['is_new'].id}, 'Project will be re-written as new'),
      (${questionsByKey['is_new'].id}, 'No, project has been going on for some months'),
      (${questionsByKey['is_new'].id}, 'No, project has been going on for a year'),
      (${questionsByKey['is_new'].id}, 'No, project has been going on for several years'),
      
      (${questionsByKey['is_rewrite'].id}, 'No, the project is new'),
      (${questionsByKey['is_rewrite'].id}, 'Yes, partially. You will not have to dive into old code'),
      (${questionsByKey['is_rewrite'].id}, 'Yes, partially. You will work with old code'),
      (${questionsByKey['is_rewrite'].id}, 'Yes, full rewrite. You will work with old code'),
     
      (${questionsByKey['tech_stack'].id}, 'Node.js'),
      (${questionsByKey['tech_stack'].id}, 'Javascript'),
      (${questionsByKey['tech_stack'].id}, 'Typescript'),
      (${questionsByKey['tech_stack'].id}, 'React.js'),
      (${questionsByKey['tech_stack'].id}, 'NEXT.js'),
      (${questionsByKey['tech_stack'].id}, 'Angular 2+'),
      (${questionsByKey['tech_stack'].id}, 'Angular 1 (Angular.js)'),
      (${questionsByKey['tech_stack'].id}, 'HTML/CSS'),
      (${questionsByKey['tech_stack'].id}, 'Vue.js'),
      (${questionsByKey['tech_stack'].id}, 'Docker'),
      (${questionsByKey['tech_stack'].id}, 'AWS'),
      (${questionsByKey['tech_stack'].id}, 'Azure'),
      (${questionsByKey['tech_stack'].id}, 'Google Cloud Platform'),
      (${questionsByKey['tech_stack'].id}, 'Apache Kafka'),
      (${questionsByKey['tech_stack'].id}, 'Microservices'),
      (${questionsByKey['tech_stack'].id}, 'RabbitMQ'),
      (${questionsByKey['tech_stack'].id}, 'Express.js'),
      (${questionsByKey['tech_stack'].id}, 'Nest.js'),
      (${questionsByKey['tech_stack'].id}, 'Loopback'),
      (${questionsByKey['tech_stack'].id}, 'Postgres'),
      (${questionsByKey['tech_stack'].id}, 'MySQL'),
      (${questionsByKey['tech_stack'].id}, 'MongoDB'),
      (${questionsByKey['tech_stack'].id}, 'Mongoose'),
      (${questionsByKey['tech_stack'].id}, 'TypeORM'),
      (${questionsByKey['tech_stack'].id}, 'Sequelize'),
      (${questionsByKey['tech_stack'].id}, 'RxJS'),
      (${questionsByKey['tech_stack'].id}, 'Jest'),
      
      (${questionsByKey['position_type'].id}, 'Frontend only'),
      (${questionsByKey['position_type'].id}, 'Frontend, with some backend'),
      (${questionsByKey['position_type'].id}, 'Backend only'),
      (${questionsByKey['position_type'].id}, 'Backend, with some frontend'),
      (${questionsByKey['position_type'].id}, 'Full-stack, with almost equal amount of frontend and backend effort'),
      
      (${questionsByKey['dev_ops_work_required'].id}, 'Required, as we do not have a dedicated devOps'),
      (${questionsByKey['dev_ops_work_required'].id}, 'Required, but only the development part of CI/CD. Other things are handled by a dedicated devOps'),
      (${questionsByKey['dev_ops_work_required'].id}, 'Almost not required, as devOps handle most of CI/CD activities'),
      (${questionsByKey['dev_ops_work_required'].id}, 'Not required at all, devOps handle all of CI/CD activities'),
      
      -- PROJECT: ORG --
      (${questionsByKey['is_remote_work'].id}, 'Yes, fully remote, even after COVID'),
      (${questionsByKey['is_remote_work'].id}, 'Remote during COVID, we will see in the future'),
      (${questionsByKey['is_remote_work'].id}, 'Remote during COVID, then you will have to work from office'),
      (${questionsByKey['is_remote_work'].id}, 'Work is only from office'),
      
      (${questionsByKey['responsibilities'].id}, 'Project manager'),
      (${questionsByKey['responsibilities'].id}, 'Business Analyst'),
      (${questionsByKey['responsibilities'].id}, 'Team Lead'),
      (${questionsByKey['responsibilities'].id}, 'Tech Lead'),
      (${questionsByKey['responsibilities'].id}, 'Solution Architect'),
      (${questionsByKey['responsibilities'].id}, 'Developer/Software Engineer'),
      
      
      (${questionsByKey['applicant_seniority'].id}, 'Trainee'),
      (${questionsByKey['applicant_seniority'].id}, 'Junior'),
      (${questionsByKey['applicant_seniority'].id}, 'Middle'),
      (${questionsByKey['applicant_seniority'].id}, 'Senior'),
      (${questionsByKey['applicant_seniority'].id}, 'Lead'),
      (${questionsByKey['applicant_seniority'].id}, 'Chief/Principal'),
      
      (${questionsByKey['project_staffing_type'].id}, 'Outsource'),
      (${questionsByKey['project_staffing_type'].id}, 'Outstaffing'),
      (${questionsByKey['project_staffing_type'].id}, 'Mixed outsource and outstaffing'),
      (${questionsByKey['project_staffing_type'].id}, 'We are a product company'),
      
      -- PROJECT: CUSTOMER --
      (${questionsByKey['is_foreign_project'].id}, 'From USA'),
      (${questionsByKey['is_foreign_project'].id}, 'From UK'),
      (${questionsByKey['is_foreign_project'].id}, 'From Europe'),
      (${questionsByKey['is_foreign_project'].id}, 'From Asia'),
      (${questionsByKey['is_foreign_project'].id}, 'From Belarus/Russia'),
      
      (${questionsByKey['customer_business_size'].id}, 'Large company'),
      (${questionsByKey['customer_business_size'].id}, 'Medium-sized company'),
      (${questionsByKey['customer_business_size'].id}, 'Small business'),
      (${questionsByKey['customer_business_size'].id}, 'Startup'),
      
      (${questionsByKey['project_business_model'].id}, 'B2B'),
      (${questionsByKey['project_business_model'].id}, 'B2C'),
      (${questionsByKey['project_business_model'].id}, 'C2C'),
      (${questionsByKey['project_business_model'].id}, 'Other'),
      
      (${questionsByKey['project_topic'].id}, 'Real estate'),
      (${questionsByKey['project_topic'].id}, 'E-commerce'),
      (${questionsByKey['project_topic'].id}, 'Healthcare'),
      (${questionsByKey['project_topic'].id}, 'Travel'),
      (${questionsByKey['project_topic'].id}, 'Education'),
      (${questionsByKey['project_topic'].id}, 'Lifestyle'),
      (${questionsByKey['project_topic'].id}, 'Sport'),
      (${questionsByKey['project_topic'].id}, 'Gambling'),
      (${questionsByKey['project_topic'].id}, 'Online games'),
      (${questionsByKey['project_topic'].id}, 'FinTech'),
      (${questionsByKey['project_topic'].id}, 'Cryptocurrencies'),
      (${questionsByKey['project_topic'].id}, 'Other'),
      
      (${questionsByKey['team_people_count'].id}, '1-2'),
      (${questionsByKey['team_people_count'].id}, '3-4'),
      (${questionsByKey['team_people_count'].id}, '5-7'),
      (${questionsByKey['team_people_count'].id}, '8-12'),
      (${questionsByKey['team_people_count'].id}, '13-20'),
      (${questionsByKey['team_people_count'].id}, '21+'),

      (${questionsByKey['project_people_count'].id}, '1-10'),
      (${questionsByKey['project_people_count'].id}, '11-20'),
      (${questionsByKey['project_people_count'].id}, '21-30'),
      (${questionsByKey['project_people_count'].id}, '31-50'),
      (${questionsByKey['project_people_count'].id}, '51-100'),
      (${questionsByKey['project_people_count'].id}, '100+'),
      
      (${questionsByKey['has_ba'].id}, 'Yes, BA is fully responsible for stories'),
      (${questionsByKey['has_ba'].id}, 'Yes, BA is responsible for stories, but developers need to talk to customer as well'),
      (${questionsByKey['has_ba'].id}, 'No dedicated BA, developers need to talk to customer and create tickets'),
      (${questionsByKey['has_ba'].id}, 'Customer creates tickets on their own'),
      
      (${questionsByKey['customer_communication'].id}, 'No communication at all. Everything is handled by someone else'),
      (${questionsByKey['customer_communication'].id}, 'Rarely, only in chat or via emails'),
      (${questionsByKey['customer_communication'].id}, 'Sometimes needed, including live meetings with customer'),
      (${questionsByKey['customer_communication'].id}, 'Yes, live meetings and chat/email communication happens almost every day'),
      
      (${questionsByKey['is_scrum'].id}, 'Yes, all Scrum ceremonies are observed'),      
      (${questionsByKey['is_scrum'].id}, 'Yes, some Scrum ceremonies are observed'),      
      (${questionsByKey['is_scrum'].id}, 'Only a couple of Scrum ceremonies are observed'),      
      (${questionsByKey['is_scrum'].id}, 'No, we use Kanban'),      
      (${questionsByKey['is_scrum'].id}, 'We do not use any methodology for now'),
            
      (${questionsByKey['strict_time_tracking'].id}, 'No tracking'),      
      (${questionsByKey['strict_time_tracking'].id}, 'Yes, you need to log time in company tools'),      
      (${questionsByKey['strict_time_tracking'].id}, 'Yes, you need to log time twice, using both company and customer tools'),
      (${questionsByKey['strict_time_tracking'].id}, 'Special screen tracking software is used to control team member activities'),
      
      (${questionsByKey['release_cycle'].id}, 'Once a week'),
      (${questionsByKey['release_cycle'].id}, 'Once a sprint'),
      (${questionsByKey['release_cycle'].id}, 'Once a month'),
      (${questionsByKey['release_cycle'].id}, 'Once in several months'),
      (${questionsByKey['release_cycle'].id}, 'Releases have not happened yet'),
      
      (${questionsByKey['story_points'].id}, 'Yes, and we do not map story points to days or hours'),
      (${questionsByKey['story_points'].id}, 'Yes, but we map story points to days or hours'),
      (${questionsByKey['story_points'].id}, 'No, we estimate in days or hours'),
      
      (${questionsByKey['project_planned_duration'].id}, 'Several years at least'),
      (${questionsByKey['project_planned_duration'].id}, 'One year at least'),
      (${questionsByKey['project_planned_duration'].id}, 'Up to one year'),
      (${questionsByKey['project_planned_duration'].id}, 'Finishes in a couple of months'),
      
      (${questionsByKey['why_position_opened'].id}, 'To replace a developer who is about to leave'),
      (${questionsByKey['why_position_opened'].id}, 'Team is expanding'),
      (${questionsByKey['why_position_opened'].id}, 'Project is about to start, we are gathering the team'),
      
      (${questionsByKey['overtimes'].id}, 'Never'),
      (${questionsByKey['overtimes'].id}, 'Might happen once a month'),
      (${questionsByKey['overtimes'].id}, 'Might happen once a week'),
      (${questionsByKey['overtimes'].id}, 'Happen often'),
      (${questionsByKey['overtimes'].id}, 'Happen almost every day, but this is going to end soon'),
      (${questionsByKey['overtimes'].id}, 'Happen almost every day and things are unlikely to change'),
      
      (${questionsByKey['task_tracker'].id}, 'Jira'),
      (${questionsByKey['task_tracker'].id}, 'YouTrack'),
      (${questionsByKey['task_tracker'].id}, 'Pivotal Tracker'),
      (${questionsByKey['task_tracker'].id}, 'Trello'),
      (${questionsByKey['task_tracker'].id}, 'Asana'),
      (${questionsByKey['task_tracker'].id}, 'Other'),
      
      (${questionsByKey['team_seniority'].id}, '2 team leads and 1-2 seniors'),
      (${questionsByKey['team_seniority'].id}, '3-4 senior devs'),
      (${questionsByKey['team_seniority'].id}, '1 team lead and 1-2 seniors'),
      (${questionsByKey['team_seniority'].id}, '1 team lead and 1 senior'),
      (${questionsByKey['team_seniority'].id}, 'No team lead, 1-2 seniors'),
      (${questionsByKey['team_seniority'].id}, 'No team lead, no seniors'),
     
      (${questionsByKey['customer_stakeholders'].id}, 'Customer has another team on their side. We will need to work with that team'),
      (${questionsByKey['customer_stakeholders'].id}, 'Customer has architect on their side'),
      (${questionsByKey['customer_stakeholders'].id}, 'Customer has BA on their side'),
      (${questionsByKey['customer_stakeholders'].id}, 'Customer has PM or other managers on their side'),
      (${questionsByKey['customer_stakeholders'].id}, 'Customer has a team lead/lead developer on their side. That lead will review your code'),
      
      (${questionsByKey['expected_work_schedule'].id}, '9am to 6pm'),
      (${questionsByKey['expected_work_schedule'].id}, '10-11am to 7-8pm'),
      (${questionsByKey['expected_work_schedule'].id}, '12am-1pm to 8-9pm'),
      (${questionsByKey['expected_work_schedule'].id}, '2pm to 10pm'),
      (${questionsByKey['expected_work_schedule'].id}, 'You are free to choose'),
      
      (${questionsByKey['is_microservices'].id}, 'Yes, pure microservices'),
      (${questionsByKey['is_microservices'].id}, 'Somewhat, this is a distributed monolith'),
      (${questionsByKey['is_microservices'].id}, 'No, that is a monolith app'),
      
      (${questionsByKey['team_location'].id}, 'Most or all are from Belarus'),
      (${questionsByKey['team_location'].id}, 'Some are from CIS (Russia, Ukraine, Armenia etc.)'),
      (${questionsByKey['team_location'].id}, 'Some are from Europe'),
      (${questionsByKey['team_location'].id}, 'Some are from the US'),
      
      (${questionsByKey['project_communication_tool'].id}, 'Slack'),
      (${questionsByKey['project_communication_tool'].id}, 'MS Teams'),
      (${questionsByKey['project_communication_tool'].id}, 'Telegram'),
      (${questionsByKey['project_communication_tool'].id}, 'Other'),
      
      
      -- WORKPLACE --
      (${questionsByKey['is_32_gb'].id}, 'No, our laptops are 16GB by default, cannot be changed'),
      (${questionsByKey['is_32_gb'].id}, 'No, our laptops are 16GB by default, 32GB can be requested per project need'),
      (${questionsByKey['is_32_gb'].id}, 'Yes, 32GB is given you by default'),
      
      (${questionsByKey['is_linux_installed'].id}, 'Yes, we install Linux by default'),
      (${questionsByKey['is_linux_installed'].id}, 'Not by default, but we can install it for you'),
      (${questionsByKey['is_linux_installed'].id}, 'We only use Windows machines, but you can install Linux on your own'),
      (${questionsByKey['is_linux_installed'].id}, 'We only use Windows machines, custom Linux installation is impossible'),
      (${questionsByKey['is_linux_installed'].id}, 'We only use MacOS'),
      
      (${questionsByKey['licences'].id}, 'Yes, software licences can be given'),
      (${questionsByKey['licences'].id}, 'No, but you can use your own licenced software'),
      (${questionsByKey['licences'].id}, 'No')      
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_answer RESTART IDENTITY CASCADE;
    `);
  },
};
