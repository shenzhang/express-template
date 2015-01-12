var util = require('util');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'fish',
  password : '123',
  database : 'fish'
});

connection.connect();

connection.query('select count(*) as count from t_user', function(err, rows, fields) {
  if (err) throw err;

  console.log(rows[0].count);
});

connection.end();