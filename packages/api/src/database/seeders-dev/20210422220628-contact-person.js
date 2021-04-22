'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_contact_person
      (name, email, phone, company_id, opportunity_id) 
      VALUES
      ('Natalia Oleshko', null, null, 1, null),
      ('Alexei Nikolaev', 'someemail@gmail.com', null, null, null)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_contact_person RESTART IDENTITY CASCADE;
    `);
  },
};
