var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});
var connectToDB = function() {
    connection.connect(function(err) {
        // if there is an error 
        if (err) throw err;
        // success message
        console.log("connected as id " + connection.threadId);
        // gracefully end this connection
      });
}
module.exports = {
    connection: connection, 
    connectToDB: connectToDB
}

