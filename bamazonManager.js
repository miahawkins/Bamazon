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