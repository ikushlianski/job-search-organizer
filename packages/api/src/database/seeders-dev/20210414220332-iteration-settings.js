'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_iteration_settings 
      (iteration_id, question_id, answer_id, boolean_answer, numeric_answer, string_answer, weight)
      VALUES
      (1, 5, null, null, 3500, null, null),
      
      (1, 6, null, null, 3000, null, null),
      
      (1, 9, 12, null, null, null, 2),
      (1, 9, 13, null, null, null, -1),
      (1, 9, 14, null, null, null, -5),
      (1, 9, 15, null, null, null, -10),
      
      (1, 13, 67, null, null, null, 5),
      (1, 13, 68, null, null, null, 1),
      (1, 13, 69, null, null, null, -5),
      (1, 13, 70, null, null, null, -10)
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_iteration_settings RESTART IDENTITY CASCADE;
    `);
  },
};
