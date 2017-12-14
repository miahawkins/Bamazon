// Requires mysql for database
var mysql = require("mysql");
// Requires inquirer to prompt user
var inquirer = require("inquirer");
// Requires cli-table to show data to the user in a easy to read table
var Table = require("cli-table");

// Connect to the bamazon database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

// Function to display all the items in the database
function displayItems() {
    var query1 = "SELECT * FROM products";

    connection.query(query1, function(error, data) {
        // If there's an errer, display error
        if (error) throw error;

        // Constructor for displaying table in cli (from npm package)
        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price", "Quantity in Stock"]
        });

        // For each data item, put it into the table
        for (var i = 0; i < data.length; i++) {
            table.push(
                [data[i].item_id, data[i].product_name, data[i].department_name, data[i].price, data[i].stock_quantity]
            );
        }

        console.log(table.toString());
        promptUser();
    })

    console.log("");
}
displayItems();

// Function to prompt user what to buy
function promptUser() {
    inquirer.prompt([{
            type: "input",
            message: "Enter the Item ID of the item you wish to buy.",
            name: "itemID"
        },
        {
            type: "input",
            message: "Enter how many you want.",
            name: "quantity"
        }
    ]).then(function(answers) {

        var query2 = "SELECT * FROM products WHERE ?";

        // Connect to database selecting the item ID and the quantity
        connection.query(query2, { item_id: answers.itemID }, function(error, data) {

        	// Add the answers
            data.push(answers);

            if (error) throw error;

            // If the user asked for more that what was in stock
            if (answers.quantity > data[0].stock_quantity) {
                console.log("Sorry, there is not enough in stock. Please try something different.");

                displayItems();

              // Otherwise, it's in stock
            } else {
                console.log("Your item is in stock!");

                var totalPrice = (data[0].price) * (answers.quantity);

                console.log("Your total price is: $" + totalPrice);


                var query3 = "UPDATE products SET stock_quantity = " + (data[0].stock_quantity - answers.quantity) + " WHERE item_id = " + answers.itemID;

                // Connect to database to update the stock quantity
                connection.query(query3, function(error, data) {

                    if (error) throw error;

                    console.log("Your item has been purchased!");
                    console.log("");

                    connection.end();
                })
            }
        })
    })
}
