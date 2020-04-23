module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "questionGroups",
      [
        {
          id: 1,
          name: "project",
        },
        {
          id: 2,
          name: "office",
        },
        {
          id: 3,
          name: "coding",
        },
        {
          id: 4,
          name: "employment",
        },
        {
          id: 5,
          name: "workplace",
        },
        {
          id: 6,
          name: "company",
        },
        {
          id: 7,
          name: "benefits",
        },
        {
          id: 8,
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
