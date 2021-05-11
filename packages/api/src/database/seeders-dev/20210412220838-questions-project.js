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
      (question_text, question_category_id, question_key, input_type)
      VALUES
      ('${questions.project.is_legacy}', ${categoriesByName['project'].id}, 'is_legacy', default),
      ('${questions.project.is_new}', ${categoriesByName['project'].id}, 'is_new', default),
      ('${questions.project.is_rewrite}', ${categoriesByName['project'].id}, 'is_rewrite', default),
      ('${questions.project.tech_stack}',${categoriesByName['project'].id}, 'tech_stack', 'checkbox'),
      ('${questions.project.is_remote_work}', ${categoriesByName['project'].id}, 'is_remote_work', default),
      ('${questions.project.project_topic}', ${categoriesByName['project'].id}, 'project_topic', 'checkbox'),
      ('${questions.project.project_staffing_type}', ${categoriesByName['project'].id}, 'project_staffing_type', default),
      ('${questions.project.is_foreign_project}', ${categoriesByName['project'].id}, 'is_foreign_project', 'checkbox'),
      ('${questions.project.interview_count}', ${categoriesByName['project'].id}, 'interview_count', 'number'),
      ('${questions.project.position_type}', ${categoriesByName['project'].id}, 'position_type', 'checkbox'),
      ('${questions.project.team_people_count}', ${categoriesByName['project'].id}, 'team_people_count', 'checkbox'),
      ('${questions.project.project_people_count}', ${categoriesByName['project'].id}, 'project_people_count', default),
      ('${questions.project.responsibilities}', ${categoriesByName['project'].id}, 'responsibilities', 'checkbox'),
      ('${questions.project.seniority}', ${categoriesByName['project'].id}, 'seniority', 'checkbox'),
      ('${questions.project.dev_ops_work_required}', ${categoriesByName['project'].id}, 'dev_ops_work_required', 'checkbox'),
      ('${questions.project.has_ba}', ${categoriesByName['project'].id}, 'has_ba', default),
      ('${questions.project.customer_communication}', ${categoriesByName['project'].id}, 'customer_communication', 'checkbox'),
      ('${questions.project.is_scrum}', ${categoriesByName['project'].id}, 'is_scrum', default),
      ('${questions.project.strict_time_tracking}', ${categoriesByName['project'].id}, 'strict_time_tracking', 'checkbox'),
      ('${questions.project.release_cycle}', ${categoriesByName['project'].id}, 'release_cycle', 'checkbox'),
      ('${questions.project.story_points}', ${categoriesByName['project'].id}, 'story_points', 'checkbox'),
      ('${questions.project.project_planned_duration}', ${categoriesByName['project'].id}, 'project_planned_duration', 'checkbox'),
      ('${questions.project.why_position_opened}', ${categoriesByName['project'].id}, 'why_position_opened', default),
      ('${questions.project.overtimes}', ${categoriesByName['project'].id}, 'overtimes', 'checkbox'),
      ('${questions.project.customer_business_size}', ${categoriesByName['project'].id}, 'customer_business_size', default),
      ('${questions.project.project_business_model}', ${categoriesByName['project'].id}, 'project_business_model', default),
      ('${questions.project.task_tracker}', ${categoriesByName['project'].id}, 'task_tracker', default)
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      truncate public.jso_question RESTART IDENTITY CASCADE;
    `);
  },
};
