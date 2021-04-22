'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_company
      (name, address_1, address_2) 
      VALUES
      ('EPAM Systems', '1 Kuprevicha St', null),
      ('Klika Tech', '85G Nezavisimosti Ave', null)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_company RESTART IDENTITY CASCADE;
    `);
  },
};
