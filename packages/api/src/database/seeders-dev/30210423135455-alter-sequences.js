'use strict';

// this seed sets "sequence" value to the actual number of records in each table where ID column is used
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      select setval('jso_answer_id_seq', (select max(id) from jso_answer), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_company_id_seq', (select max(id) from jso_company), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_contact_person_id_seq', (select max(id) from jso_contact_person), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_interview_id_seq', (select max(id) from jso_interview), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_iteration_id_seq', (select max(id) from jso_iteration), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_iteration_question_id_seq', (select max(id) from jso_iteration_question), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_iteration_settings_id_seq', (select max(id) from jso_iteration_settings), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_opportunity_id_seq', (select max(id) from jso_opportunity), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_opportunity_answer_id_seq', (select max(id) from jso_opportunity_answer), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_project_id_seq', (select max(id) from jso_project), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_question_id_seq', (select max(id) from jso_question), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_question_category_id_seq', (select max(id) from jso_question_category), true);
    `);

    await queryInterface.sequelize.query(`
      select setval('jso_user_id_seq', (select max(id) from jso_user), true);
    `);
  },
};
