'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_user 
      (id, name, email, "createdAt", "updatedAt") 
      VALUES
      (-1, 'common-user', null, '2021-04-01', '2021-04-01')
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_user RESTART IDENTITY CASCADE;
    `);
  },
};
