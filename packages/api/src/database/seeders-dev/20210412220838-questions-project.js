'use strict';

const questions = require('../constants/question.constant');

module.exports = {
  up: async (queryInterface) => {
    const [categories] = await queryInterface.sequelize.query(
      `select * from public.jso_question_category`,
    );

    const categoriesByName = categories.reduce((acc, cur) => {
      acc[cur['category_name']] = cur;

      return acc;
    }, {});

    await queryInterface.sequelize.query(`
      insert into public.jso_question
      (question_text, question_category_id, question_key)
      VALUES
      ('${questions.project.is_legacy}', ${categoriesByName['project'].id}, 'is_legacy'),
      ('${questions.project.is_new}', ${categoriesByName['project'].id}, 'is_new'),
      ('${questions.project.is_rewrite}', ${categoriesByName['project'].id}, 'is_rewrite'),
      ('${questions.project.tech_stack}', ${categoriesByName['project'].id}, 'tech_stack'),
      ('${questions.project.is_remote_work}', ${categoriesByName['project'].id}, 'is_remote_work'),
      ('${questions.project.project_topic}', ${categoriesByName['project'].id}, 'project_topic'),
      ('${questions.project.project_staffing_type}', ${categoriesByName['project'].id}, 'project_staffing_type'),
      ('${questions.project.is_foreign_project}', ${categoriesByName['project'].id}, 'is_foreign_project'),
      ('${questions.project.interview_count}', ${categoriesByName['project'].id}, 'interview_count'),
      ('${questions.project.position_type}', ${categoriesByName['project'].id}, 'position_type'),
      ('${questions.project.team_people_count}', ${categoriesByName['project'].id}, 'team_people_count'),
      ('${questions.project.project_people_count}', ${categoriesByName['project'].id}, 'project_people_count'),
      ('${questions.project.dev_ops_work_required}', ${categoriesByName['project'].id}, 'dev_ops_work_required'),
      ('${questions.project.has_ba}', ${categoriesByName['project'].id}, 'has_ba'),
      ('${questions.project.customer_communication}', ${categoriesByName['project'].id}, 'customer_communication'),
      ('${questions.project.is_scrum}', ${categoriesByName['project'].id}, 'is_scrum'),
      ('${questions.project.strict_time_tracking}', ${categoriesByName['project'].id}, 'strict_time_tracking'),
      ('${questions.project.release_cycle}', ${categoriesByName['project'].id}, 'release_cycle'),
      ('${questions.project.story_points}', ${categoriesByName['project'].id}, 'story_points'),
      ('${questions.project.project_planned_duration}', ${categoriesByName['project'].id}, 'project_planned_duration'),
      ('${questions.project.why_position_opened}', ${categoriesByName['project'].id}, 'why_position_opened'),
      ('${questions.project.overtimes}', ${categoriesByName['project'].id}, 'overtimes')
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question RESTART IDENTITY CASCADE;
    `);
  },
};
