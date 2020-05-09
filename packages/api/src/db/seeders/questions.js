const questionData = [
  {
    id: 1,
    text: "is_project_domain_interesting",
    groupId: 1,
  },
  {
    id: 2,
    text: "company_type", // business_type?
    groupId: 1,
  },
  {
    id: 3,
    text: "is_remote",
    groupId: 1,
  },
  {
    id: 4,
    text: "distance_to_office",
    groupId: 2,
  },
  {
    id: 5,
    text: "additional_interviews", // with team or with customer, apart from the tech and phone interview
    groupId: 1,
  },
  {
    id: 6,
    text: "does_tech_stack_match",
    groupId: 1,
  },
  {
    id: 7,
    text: "legacy_code", // old browser support, old code, old technologies, need for refactoring...
    groupId: 3,
  },
  {
    id: 8,
    text: "team_size",
    groupId: 1,
  },
  {
    id: 9,
    text: "scope_of_responsibilities", // e.g.: backend + frontend, or strictly frontend
    groupId: 1,
  },
  {
    id: 10,
    text: "has_team_lead",
    groupId: 1,
  },
  {
    id: 11,
    text: "has_manager",
    groupId: 1,
  },
  {
    id: 12,
    text: "communication_amount",
    groupId: 1,
  },
  {
    id: 13,
    text: "team_processes", // from 'strictly defined' to 'absent'
    groupId: 1,
  },
  // {
  //   id: 14,
  //   text: "task_estimation",
  //   groupId: 1,
  // },
  {
    id: 15,
    text: "time_tracking_company",
    groupId: 6,
  },
  {
    id: 16,
    text: "task_estimation_style", // in hours, in story points
    groupId: 1,
  },
  {
    id: 17,
    text: "estimated_project_duration", // long, medium (up to year), short (a couple of months), no info...
    groupId: 1,
  },
  {
    id: 18,
    text: "writing_tests",
    groupId: 3,
  },
  {
    id: 19,
    text: "performance_review", // process well defined, review is done ad hoc, impossible...
    groupId: 6,
  },
  {
    id: 20,
    text: "know_exact_project_when_starting",
    groupId: 6,
  },
  {
    id: 21,
    text: "open_space", // classic open space, somewhat open space, separate rooms...
    groupId: 5,
  },
  {
    id: 22,
    text: "powerful_hardware",
    groupId: 5,
  },
  {
    id: 23,
    text: "has_double_monitor", // bool
    groupId: 5,
  },
  {
    id: 24,
    text: "licensed_software", // e.g. company sponsors IDEs and other tools
    groupId: 7,
  },
  {
    id: 25,
    text: "company_size", // approx staff count
    groupId: 6,
  },
  {
    id: 26,
    text: "is_hard_currency", // is bound to US dollar/Euro or to local currency
    groupId: 4,
  },
  {
    id: 27,
    text: "sport_compensation",
    groupId: 7,
  },
  // {
  //   id: 28,
  //   text: "sick_day_count",
  //   groupId: 7,
  // },
  {
    id: 29,
    text: "bonus_day_count", // includes sick days
    groupId: 7,
  },
  {
    id: 30,
    text: "health_insurance_scope", // how powerful is medical insurance? (low, medium, high)
    groupId: 7,
  },
  {
    id: 31,
    text: "vacation_length",
    groupId: 7,
  },
  {
    id: 32,
    text: "remote_work_opportunities", // often, rarely
    groupId: 7,
  },
  {
    id: 33,
    text: "company_sponsors_studies", // or allocates some working hours for pet projects/education
    groupId: 7,
  },
];

const questions = questionData.map((question) => ({
  ...question,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("questions", questions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questions", null, {});
  },
};
