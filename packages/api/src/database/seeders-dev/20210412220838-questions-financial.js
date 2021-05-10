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
      (question_text, question_category_id, question_key, input_type)
      VALUES
      ('${questions.financial.net_salary}', ${categoriesByName['financial'].id}, 'net_salary', 'number'),
      ('${questions.financial.min_salary}', ${categoriesByName['financial'].id}, 'min_salary', 'number'),
      ('${questions.financial.probation_salary}', ${categoriesByName['financial'].id}, 'probation_salary', 'number')
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question RESTART IDENTITY CASCADE;
    `);
  },
};
