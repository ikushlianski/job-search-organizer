'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_opportunity_answer 
      (opportunity_id, question_id, answer_id, answer_string) 
      VALUES
      (1, 1, 3, null),
      (1, 9, 13, 'Re-platforming but you should not be facing legacy code')
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_opportunity_answer RESTART IDENTITY CASCADE;
    `);
  },
};
