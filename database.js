const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'products',
  password: 'rudransh@1'
});

module.exports = pool.promise();
