var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'ge71in1m60udiqdi',
  password : 'qtxf3yb01ht64igw',
  database : 'b7ytg0pl88aatm9d'
});
db.connect();
module.exports = db;