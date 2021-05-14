const categories = require('./category.constant');

const questions = {
  [categories['financial']]: {
    net_salary: 'Average net salary you are ready to offer',
    min_salary: 'Minimum salary for this position',
    probation_salary: 'Planned salary during probation period',
  },
  [categories['company']]: {
    office_location: 'Is office location suitable for me?',
    interview_count: 'How many interviews does the company carry out?',
    salary_currency: 'Is it possible to receive salary in dollars?',
    company_project_count:
      'How many projects does your company have that match my skills? This is in case I want to switch projects in the future',
    paid_leave_day_count:
      'How many days of paid leave (excluding "sick days") do you offer?',
  },

  /**
   * PROJECT
   */
  [categories['project']]: {
    // topic
    project_topic: 'What is the project about?',

    // customer
    is_foreign_project: 'What country is the customer from?',
    project_planned_duration: 'How long will the project run?',
    customer_communication:
      'How much communication with customer is expected from me?',
    customer_business_size: 'What is the size of customer we are working with?',
    project_business_model: 'What is the business model of the project?',
    customer_stakeholders: 'Who does the customer have on their side?',

    // tasks
    project_staffing_type:
      'Is the project outsource, outstaff or custom product?',
    position_type: 'Is the project purely frontend, backend or full-stack?',
    dev_ops_work_required:
      'Do developers have to manage project infrastructure?',

    // project team
    team_people_count:
      'How many developers are in the team (not on the entire project)?',
    project_people_count: 'How many developers are on the entire project?',
    responsibilities:
      'What team role will a candidate perform on this project?',
    applicant_seniority: 'What seniority level are you targeting?',
    team_seniority: 'Junior/senior devs ratio',
    has_ba: 'Does the project have BAs?',
    team_location: 'Where are guys on the project from?',

    // project org
    is_remote_work: 'Is remote work possible?',
    interview_count: 'How many interviews does the project carry out?',
    why_position_opened: 'Why did this position open?',
    overtimes: 'How often do overtimes happen on this project?',
    expected_work_schedule:
      'What are the expected hours when I should be at work (available)?',
    project_communication_tool: "What are the team's communication tools?",

    // project processes
    is_scrum: 'Does the team follow Scrum practices?',
    story_points: 'Does the team use story points?',
    task_tracker: 'What is the business model of the project?',
    strict_time_tracking:
      'Does the company or team use automated tools to track the developer screen?',
    release_cycle: 'How often do releases happen?',

    // project codebase
    tech_stack: 'What is the tech stack used on the project?',
    is_legacy: 'Are legacy technologies involved?',
    is_new: 'Is the project written from scratch?',
    is_rewrite: 'Is the project a re-write from older system/solution?',
    is_microservices: 'Is the project microservice-based?',
  },
  [categories['workplace']]: {
    is_32_gb: 'Is the PC going to have 32GB RAM on it?',
    is_linux_installed: 'Does the company pre-install Linux?',
    licences: 'Does the company give WebStorm licenses?',
  },
  [categories['misc']]: {
    start_date: 'When is the start date possible for this position',
  },
};

module.exports = questions;
