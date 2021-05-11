'use strict';

const categories = require('../constants/category.constant');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_question_category 
      (category_name) 
      VALUES
      ('${categories.financial}'),
      ('${categories.company}'),
      ('${categories.project}'),
      ('${categories.benefits}'),
      ('${categories.workplace}'),
      ('${categories.misc}')
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question_category RESTART IDENTITY CASCADE;
    `);
  },
};
