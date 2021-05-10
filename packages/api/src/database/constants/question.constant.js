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
  },
  [categories['project']]: {
    project_topic: 'What is the project about?',
    project_staffing_type:
      'Is the project outsource, outstaff or custom product?',
    interview_count: 'How many interviews does the project carry out?',
    is_foreign_project: 'Is your customer foreign?',
    is_legacy: 'Are legacy technologies involved?',
    is_new: 'Is the project written from scratch?',
    is_rewrite: 'Is the project a re-write from older system/solution?',
    tech_stack: 'What is the tech stack used on the project?',
    position_type: 'Is the project purely frontend, backend or full-stack?',
    is_remote_work: 'Is remote work possible?',
    team_people_count:
      'How many developers are in the team (not on the entire project)?',
    project_people_count: 'How many developers are on the entire project?',
    responsibilities:
      'What team role will a candidate perform on this project?',
    seniority: 'What seniority level are you targeting?',
    dev_ops_work_required:
      'Do developers have to manage project infrastructure?',
    has_ba: 'Does the project have BAs?',
    is_scrum: 'Does the team follow Scrum practices?',
    story_points: 'Does the team use story points?',
    strict_time_tracking:
      'Does the company or team use automated tools to track the developer screen?',
    project_planned_duration: 'How long will the project run?',
    release_cycle: 'How often do releases happen?',
    customer_communication:
      'How much communication with customer is expected from me?',
    why_position_opened: 'Why did this position open?',
    overtimes: 'How often do overtimes happen on this project?',
    customer_business_size: 'What is the size of customer we are working with?',
    project_business_model: 'What is the business model of the project?',
    task_tracker: 'What is the business model of the project?',
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
