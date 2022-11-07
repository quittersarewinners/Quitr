require('dotenv').config();
const { Pool } = require('pg');
// const PG_URI =
//   'postgres://bdrdwafj:IQe7pSFU2YZM-X63cHqFuM18pKUYH8cT@peanut.db.elephantsql.com/bdrdwafj';

const PG_URI = 'postgres://qmubiegg:fF10SCWiN6ihveG_u1y2yZ2qa6AbJo7n@peanut.db.elephantsql.com/qmubiegg'

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
