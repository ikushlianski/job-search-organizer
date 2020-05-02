module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "questionGroups",
      [
        {
          id: 1,
          name: "project",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "office",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "coding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "employment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "workplace",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "company",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "benefits",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "others",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questionGroups", null, {});
  },
};
