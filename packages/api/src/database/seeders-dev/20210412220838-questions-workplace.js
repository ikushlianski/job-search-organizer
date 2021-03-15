'use strict';

const questions = require('../constants/question.constant');

module.exports = {
  up: async (queryInterface) => {
    const [categories] = await queryInterface.sequelize.query(
      `select * from public.jso_question_category`,
    );

    const categoriesByName = categories.reduce((acc, cur) => {
      acc[cur['category_name']] = cur;

      return acc;
    }, {});

    await queryInterface.sequelize.query(`
      insert into public.jso_question
      (question_text, question_category_id, question_key, is_multi_choice)
      VALUES
      ('${questions.workplace.is_32_gb}', ${categoriesByName['workplace'].id}, 'is_32_gb', default),
      ('${questions.workplace.is_linux_installed}', ${categoriesByName['workplace'].id}, 'is_linux_installed', default),
      ('${questions.workplace.licences}', ${categoriesByName['workplace'].id}, 'licences', true)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question RESTART IDENTITY CASCADE;
    `);
  },
};
