const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'imie',
  password : 'passe',
  database : 'just_api'
});

db.connect();

module.exports = db;