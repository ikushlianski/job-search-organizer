'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_iteration_question 
      (iteration_id, question_id, hr_visible)
      VALUES
      (1, 1, true),
      (1, 2, false),
      (1, 3, false),
      (1, 4, false),
      (1, 5, true),
      (1, 6, true),
      (1, 7, true),
      (1, 8, true),
      (1, 9, false),
      (1, 10, true)
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_iteration_question RESTART IDENTITY CASCADE;
    `);
  },
};
