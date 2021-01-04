import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const port = parseInt(process.env.DB_PORT, 10);
      const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          dialect: 'postgres',
          host: process.env.DB_HOST,
          port,
        },
      );

      sequelize.addModels([]);
      await sequelize.sync();

      return sequelize;
    },
  },
];
