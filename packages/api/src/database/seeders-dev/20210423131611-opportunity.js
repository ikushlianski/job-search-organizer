'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_opportunity 
      (id, date, final_date, name, iteration_id, company_id, project_id, user_id) 
      VALUES
      (1, null, null, 'test opportunity', 1, 1, 1, 1)
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_opportunity RESTART IDENTITY CASCADE;
    `);
  },
};
