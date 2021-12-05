var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({
  host     : 'ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'ge71in1m60udiqdi',
  password : 'qtxf3yb01ht64igw',
  database : 'b7ytg0pl88aatm9d'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
 
connection.end();