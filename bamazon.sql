CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255) NOT NULL,
	price INT NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO
products (product_name, department_name, price, stock_quantity)
VALUES("Chevy Impala", "Cars", 25000, 1),
		("Colt", "Weapons", 1000, 1),
		("Rock Salt", "Kitchen", 10, 1000),
		("Holy Water", "Kitchen", 1, 500),
		("Cell Phone", "Electronics", 50, 50),
		("Cheeseburger", "Kitchen", 10, 30), 
		("First Aid Kit", "Medical", 30, 1000),
		("Fake ID", "Costumes", 20, 40),
		("Suit", "Costumes", 200, 300),
		("Leather Jacket", "Costumes", 100, 25)
;