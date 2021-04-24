'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_iteration_settings 
      (iteration_id, question_id, answer_id, boolean_answer, numeric_answer, string_answer, weight)
      VALUES
      (1, 1, 1, true, null, null, 1),
      (1, 1, 2, true, null, null, 0.5),
      (1, 5, null, null, 3500, null, null),
      (1, 6, null, null, 3000, null, null),
      (1, 9, 12, null, null, null, 1)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_iteration_settings RESTART IDENTITY CASCADE;
    `);
  },
};
