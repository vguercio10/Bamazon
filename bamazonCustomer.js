var conn = require("./bamazonconnection");
var connection = conn.connection;
conn.connectToDB();
var columnify = require("columnify");
var inquirer = require ("inquirer");

// Fetch all products from database
connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log(columnify(results, {
        columnSplitter: " | "
    }));
    userBuy();
})

function userBuy() {
    inquirer.prompt([
        {
            type: "input", 
            name: "itemID",
            message: "What item would you like to buy?"
        },
        {
            type: "input",
            name: "quantity",
            message: "How many units of the product would you like to buy?"
        }
    ]).then(function (answers) {
        connection.query(`SELECT * FROM products WHERE id = ${answers.itemID}`, function(err, results){
            if (err) throw err;
            console.log(results[0].stock_quantity);
            var stockQuantity = results[0].stock_quantity;
            var userQuantity = answers.quantity;
            if (userQuantity > stockQuantity) {
                console.log('Insufficient quantity!');
            } else {
                var newQuantity = stockQuantity - userQuantity;
                var totalAmount = userQuantity * results[0].price;
                console.log(`Your total is ${totalAmount}`);
            }
            connection.end();
        })
         
    })
// Next step is to update the database with remaining quantity
// Once the update goes through, show the customer the total cost of their purchase


   
}
