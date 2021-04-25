const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const saveCompanies = async (companyNames) => {
  await client.connect();

  // todo move table names to shared, make them dynamic
  const query = `INSERT INTO jso_company(name) VALUES ${expand(
    companyNames.length,
    1,
  )}`;

  await client.query(query, companyNames);

  await client.end();
};

module.exports = { saveCompanies };

// move to utils
function expand(rowCount, columnCount, startAt = 1) {
  let index = startAt;

  return Array(rowCount)
    .fill(0)
    .map(
      (v) =>
        `(${Array(columnCount)
          .fill(0)
          .map((v) => `$${index++}`)
          .join(', ')})`,
    )
    .join(', ');
}
