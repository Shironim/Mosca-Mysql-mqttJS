// var acak = Math.floor(Math.random() * 30) + 20

// var message = acak.toString()

// console.log(message)
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#Kunci231#",
  database: "mqttJS"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO mqttJS (message) VALUES ('0')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});