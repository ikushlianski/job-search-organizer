'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_project
      (name) 
      VALUES
      ('Some test project 1'),
      ('Test project 2')
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_project RESTART IDENTITY CASCADE;
    `);
  },
};
