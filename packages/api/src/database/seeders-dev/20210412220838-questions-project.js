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
      (question_text, question_category_id)
      VALUES
      ('${questions.project.is_legacy}', ${categoriesByName['project'].id}),
      ('${questions.project.is_new}', ${categoriesByName['project'].id}),
      ('${questions.project.is_rewrite}', ${categoriesByName['project'].id}),
      ('${questions.project.tech_stack}', ${categoriesByName['project'].id}),
      ('${questions.project.is_remote_work}', ${categoriesByName['project'].id}),
      ('${questions.project.project_topic}', ${categoriesByName['project'].id}),
      ('${questions.project.project_staffing_type}', ${categoriesByName['project'].id}),
      ('${questions.project.is_foreign_project}', ${categoriesByName['project'].id}),
      ('${questions.project.interview_count}', ${categoriesByName['project'].id}),
      ('${questions.project.position_type}', ${categoriesByName['project'].id}),
      ('${questions.project.team_people_count}', ${categoriesByName['project'].id}),
      ('${questions.project.project_people_count}', ${categoriesByName['project'].id}),
      ('${questions.project.dev_ops_work_required}', ${categoriesByName['project'].id}),
      ('${questions.project.has_ba}', ${categoriesByName['project'].id}),
      ('${questions.project.customer_communication}', ${categoriesByName['project'].id}),
      ('${questions.project.is_scrum}', ${categoriesByName['project'].id}),
      ('${questions.project.strict_time_tracking}', ${categoriesByName['project'].id}),
      ('${questions.project.release_cycle}', ${categoriesByName['project'].id}),
      ('${questions.project.story_points}', ${categoriesByName['project'].id}),
      ('${questions.project.project_planned_duration}', ${categoriesByName['project'].id}),
      ('${questions.project.why_position_opened}', ${categoriesByName['project'].id}),
      ('${questions.project.overtimes}', ${categoriesByName['project'].id})
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question RESTART IDENTITY CASCADE;
    `);
  },
};
