import { ModelCtor, Sequelize } from 'sequelize-typescript';
import { Iteration } from '../entities/iteration/iteration.model';
import { Opportunity } from '../entities/opportunity/opportunity.model';
import { Company } from '../entities/company/company.model';
import { Project } from '../entities/project/project.model';
import { Question } from '../entities/question/question.model';
import { QuestionCategory } from '../entities/question-category/question-category.model';
import { IterationSettings } from '../entities/iteration-settings/iteration-settings.model';
import { Answer } from '../entities/answer/answer.model';
import { OpportunityAnswer } from '../entities/opportunity-answer/opportunity-answer.model';

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

      sequelize.addModels([
        Answer,
        Company,
        Iteration,
        IterationSettings,
        Opportunity,
        OpportunityAnswer,
        Project,
        Question,
        QuestionCategory,
      ] as ModelCtor[]);
      await sequelize.sync({ force: true });

      return sequelize;
    },
  },
];
