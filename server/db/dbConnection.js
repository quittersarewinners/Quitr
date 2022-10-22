require('dotenv').config();
const { Pool } = require('pg');
const PG_URI =
  'postgres://bdrdwafj:IQe7pSFU2YZM-X63cHqFuM18pKUYH8cT@peanut.db.elephantsql.com/bdrdwafj';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    console.log(PG_URI);
    return pool.query(text, params, callback);
  },
};
