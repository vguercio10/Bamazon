var conn = require("./bamazonconnection");
var connection = conn.connection;
conn.connectToDB();
var columnify = require("columnify");
var inquirer = require("inquirer");

// Fetch all products from database
connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.log(columnify(results, {
        columnSplitter: " | "
    }));
    userBuy();
})

function userBuy() {
    inquirer.prompt([{
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
        connection.query(`SELECT * FROM products WHERE id = ${answers.itemID}`, function (err, results) {
            if (err) throw err;
            // console.log(results[0].stock_quantity);
            var stockQuantity = results[0].stock_quantity;
            var userQuantity = answers.quantity;
            if (userQuantity > stockQuantity) {
                console.log('Insufficient quantity!');
                connection.end();

            } else {
                var newQuantity = stockQuantity - userQuantity;
                var totalAmount = userQuantity * results[0].price;
                console.log(`Your total is $ ${totalAmount}`);
                updateQuantity(newQuantity, answers.itemID, stockQuantity, userQuantity);

            }
        })
    });

    function updateQuantity(newQuantity, itemID, stockQuantity, userQuantity) {
        connection.query(`UPDATE products SET ? WHERE ?`, 
        [
            {
                stock_quantity: newQuantity
            },
            {
                id: itemID
            }
        ],
        function (err, results) {
            if (err) throw err;
            var newQuantity = stockQuantity - userQuantity;
            console.log(`Stock quantity updated ${newQuantity}`);
            connection.end();
        })


    }
}