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
      (question_text, question_category_id)
      VALUES
      ('${questions.project.is_legacy}', ${categoriesByName['project'].id}),
      ('${questions.project.is_new}', ${categoriesByName['project'].id}),
      ('${questions.project.is_rewrite}', ${categoriesByName['project'].id}),
      ('${questions.project.tech_stack}', ${categoriesByName['project'].id}),
      ('${questions.project.is_tech_stack_ok}', ${categoriesByName['project'].id})
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question RESTART IDENTITY CASCADE;
    `);
  },
};
