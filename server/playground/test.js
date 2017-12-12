'use strict';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'wohngeld',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect();

connection.query('SELECT * FROM WerteABC', function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('The solution is: ', results);
  results.forEach((result) => {
    console.log(result);
  });

});

connection.end();
