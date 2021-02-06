'use strict';

const { QuestionEnum } = require('../../entities/question/question.enum');

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
      ('${QuestionEnum.net_salary}', ${categoriesByName['financial'].id}),
      ('${QuestionEnum.min_salary}', ${categoriesByName['financial'].id}),
      ('${QuestionEnum.probation_salary}', ${categoriesByName['financial'].id})
    `);
  },

  down: async (queryInterface, Sequelize) => {},
};
