import { Sequelize } from 'sequelize-typescript';
import { Iteration } from '../entities/iteration/iteration.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (): Promise<Sequelize> => {
      console.log('process.env.POSTGRES_DB', process.env.POSTGRES_DB);
      const port = parseInt(process.env.DB_PORT, 10);

      const sequelize = new Sequelize(
        process.env.POSTGRES_DB,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        {
          dialect: 'postgres',
          host: process.env.DB_HOST,
          port,
        },
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sequelize.addModels([Iteration]);
      await sequelize.sync();

      return sequelize;
    },
  },
];
