'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_iteration_settings 
      (iteration_id, question_id, answer_id, boolean_answer, numeric_answer, string_answer, weight)
      VALUES
      (1, 9, null, null, null, '2021-07-05', 0),
      
      (1, 14, 66, null, null, null, 5),
      (1, 14, 67, null, null, null, 1),
      (1, 14, 68, null, null, null, -5),
      (1, 14, 69, null, null, null, -10),
      
      (1, 20, 111, null, null, null, -3),
      (1, 20, 112, null, null, null, 0),
      (1, 20, 113, null, null, null, 3),
      (1, 20, 114, null, null, null, 4),
      (1, 20, 115, null, null, null, -2),
      (1, 20, 116, null, null, null, -5)
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_iteration_settings RESTART IDENTITY CASCADE;
    `);
  },
};
