import { ModelCtor, Sequelize } from 'sequelize-typescript';
import { Iteration } from '../entities/iteration/iteration.model';
import { Opportunity } from '../entities/opportunity/opportunity.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (): Promise<Sequelize> => {
      const port = parseInt(process.env.DB_PORT, 10);

      const sequelize = new Sequelize(
        process.env.POSTGRES_DB,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        { dialect: 'postgres', host: process.env.DB_HOST, port },
      );

      sequelize.addModels([Iteration, Opportunity] as ModelCtor[]);
      await sequelize.sync();

      return sequelize;
    },
  },
];
