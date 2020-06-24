const questionGroup = {
  company: 'company',
  project: 'project',
};

const questionData = [
  {
    id: 1,
    text: 'project_domain',
    note: 'Are you interested in project domain?',
    group: questionGroup.project,
  },
  {
    id: 2,
    text: 'distance_to_office',
    note: "How suitable is this company's office location?",
    group: questionGroup.company,
  },
  {
    id: 3,
    text: 'tech_stack',
    note: 'What do you think about the tech stack used on this project?',
    group: questionGroup.project,
  },
  {
    id: 4,
    text: 'legacy_code',
    note:
      'Old browser support, old code, old technologies, need for refactoring...',
    group: questionGroup.project,
  },
  {
    id: 5,
    text: 'english_level',
    note: 'Is your English level enough to work on this project?',
    group: questionGroup.project,
  },
  {
    id: 6,
    text: 'team_size',
    note:
      'Is team size on this project appropriate for you? Note that on a daily basis you might need to communicate only with part of a big team',
    group: questionGroup.project,
  },
  {
    id: 7,
    text: 'scope_of_responsibilities',
    note:
      'How suitable is the scope of responsibilities you will be parforming?',
      group: questionGroup.project,
  },
  {
    id: 8,
    text: 'time_tracking_project',
    note: "Are you OK with how the project tracks members' time?",
    group: questionGroup.project,
  },
  {
    id: 8,
    text: 'time_tracking_company',
    note: "Are you OK with how the company tracks employees' time?",
    group: questionGroup.company,
  },
];

const questions = questionData.map((question) => ({
  ...question,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', questions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  },
};
