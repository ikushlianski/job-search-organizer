'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_iteration_settings 
      (iteration_id, question_id, answer_id, boolean_answer, numeric_answer, string_answer, weight)
      VALUES
      (1, 1, null, true, null, null, 3),
      (1, 2, null, null, 3500, null, 3),
      (1, 3, null, null, 3000, null, 2)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_iteration_settings RESTART IDENTITY CASCADE;
    `);
  },
};
