const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '1234',
      database : 'SB_Vendor'
    }
  });

  module.exports = knex