const categories = require('./category.constant');

const questions = {
  [categories['financial']]: {
    net_salary: 'What net salary would you prefer?',
    min_salary: 'What is the minimum salary you would accept this time?',
    probation_salary: 'What salary would you accept during probation period?',
  },
  [categories['company']]: {
    is_remote_work: 'Is remote work possible',
  },
  [categories['project']]: {
    is_legacy: 'Are legacy technologies involved?',
    is_new: 'Is the project written from scratch?',
    is_rewrite: 'Is the project a re-write from older system/solution?',
    tech_stack: 'What is the tech stack used on the project?',
    is_tech_stack_ok: 'Is tech stack suitable for me?',
  },
  [categories['workplace']]: {
    is_32_gb: 'Is the PC going to have 32GB RAM on it?',
    is_linux_installed: 'Does the company pre-install Linux?',
  },
};

module.exports = questions;
