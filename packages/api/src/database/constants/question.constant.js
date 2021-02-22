const categories = require('./category.constant');

const questions = {
  [categories['financial']]: {
    net_salary: 'What net salary would you prefer?',
    min_salary: 'What is the minimum salary you would accept this time?',
    probation_salary: 'What salary would you accept during probation period?',
  },
};

module.exports = questions;
