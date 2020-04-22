module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "questionGroups",
      [
        {
          name: "project",
        },
        {
          name: "office",
        },
        {
          name: "employment",
        },
        {
          name: "workplace",
        },
        {
          name: "company",
        },
        {
          name: "benefits",
        },
        {
          name: "others",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questionGroups", null, {});
  },
};
