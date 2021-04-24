import { Sequelize } from 'sequelize-typescript';
import { Iteration } from '../entities/iteration/iteration.model';
import { Opportunity } from '../entities/opportunity/opportunity.model';
import { Company } from '../entities/company/company.model';
import { Project } from '../entities/project/project.model';
import { Question } from '../entities/question/question.model';
import { QuestionCategory } from '../entities/question-category/question-category.model';
import { IterationSettings } from '../entities/iteration-settings/iteration-settings.model';
import { Answer } from '../entities/answer/answer.model';
import { OpportunityAnswer } from '../entities/opportunity-answer/opportunity-answer.model';
import { IterationQuestion } from '../entities/iteration-questions/iteration-questions.model';
import { User } from '../entities/user/user.model';
import { Interview } from '../entities/interview/interview.model';
import { ContactPerson } from '../entities/contact-person/contact-person.model';
import { SEQUELIZE } from './database.constant';
import { UserOpportunityScore } from '../entities/user-opportunity-score/user-opportunity-score.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (): Promise<Sequelize> => {
      const port = parseInt(String(process.env.DB_PORT), 10);

      const sequelize = new Sequelize(
        String(process.env.POSTGRES_DB),
        String(process.env.POSTGRES_USER),
        String(process.env.POSTGRES_PASSWORD),
        { dialect: 'postgres', host: process.env.DB_HOST, port },
      );

      sequelize.addModels([
        Answer,
        Company,
        ContactPerson,
        Interview,
        Iteration,
        IterationQuestion,
        IterationSettings,
        Opportunity,
        OpportunityAnswer,
        Project,
        Question,
        QuestionCategory,
        User,
        UserOpportunityScore,
      ]);
      // todo remove when schema stabilizes, move to migrations
      await sequelize.sync({ force: false });

      return sequelize;
    },
  },
];
