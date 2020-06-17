const questionData = [
  {
    id: 1,
    text: "project_domain",
    note: "Are you interested in project domain?",
  },
  {
    id: 2,
    text: "distance_to_office",
    note: "How suitable is this company's office location?",
  },
  {
    id: 3,
    text: "tech_stack",
    note: "What do you think about the tech stack used on this project?",
  },
  {
    id: 4,
    text: "legacy_code",
    note:
      "Old browser support, old code, old technologies, need for refactoring...",
  },
  {
    id: 5,
    text: "english_level",
    note: "Is your English level enough to work on this project?",
  },
  {
    id: 6,
    text: "team_size",
    note:
      "Is team size on this project appropriate for you? Note that on a daily basis you might need to communicate only with part of a big team",
  },
  {
    id: 7,
    text: "scope_of_responsibilities",
    note:
      "How suitable is the scope of responsibilities you will be parforming?",
  },
  {
    id: 8,
    text: "time_tracking_company",
    note: "Are you OK with how the company tracks employees' time?",
  },
];

const questions = questionData.map((question) => ({
  ...question,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("questions", questions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questions", null, {});
  },
};
