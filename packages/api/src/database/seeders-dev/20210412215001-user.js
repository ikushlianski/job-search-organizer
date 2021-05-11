'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      insert into public.jso_user 
      (id, name, email, "currentAccessToken", password, "createdAt", "updatedAt") 
      VALUES
      (-1, 'common-user', null, null, null, '2021-04-01', '2021-04-01'),
      (1, null, 'kushliansky@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1c2hsaWFuc2t5QGdtYWlsLmNvbSIsImlhdCI6MTYxOTEyOTYyMiwiZXhwIjoxNjE5MTcyODIyfQ.AxRFrGRwHyooPiB6GPo591q1jrvHUkc5asfZjgLRSQk', '$2b$04$GOsBue7C42n1yqN4VBkgUeG/j/k49HP6asEqXFUlRXVKae/2nMU0m', '2021-04-01', '2021-04-01')
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_user RESTART IDENTITY CASCADE;
    `);
  },
};
