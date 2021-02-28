'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_iteration 
      (start_date, final_date, name) 
      VALUES
      ('2021-01-01', '2021-02-01', 'test-iteration')
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_iteration RESTART IDENTITY CASCADE;
    `);
  },
};
