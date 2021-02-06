'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_question_category 
      (category_name) 
      VALUES
      ('financial'),
      ('company'),
      ('project'),
      ('benefits'),
      ('workplace'),
      ('misc')
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question_category RESTART IDENTITY CASCADE;
    `);
  },
};
