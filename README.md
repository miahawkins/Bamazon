# Bamazon
An Amazon-like storefront built with MySQL. This CLI app will take in orders from customers and deplete stock from the store's inventory. 

MySQL, Inquirer, and cli-table npm packages were used.

User must type in "node bamazonCustomer.js"

**Upon submitting, the list of items will be shown in an easy to read table. This will show details of what is in stock such as name, price, and quantity in stock.
![Image](https://user-images.githubusercontent.com/29414935/33977737-f69d0ec8-e061-11e7-9587-89c36241c3a7.png)


**User will be prompted to select an Item ID and how much they want of said item. I bought 2 leather jackets. 
![Image](https://user-images.githubusercontent.com/29414935/33977739-f6ad7736-e061-11e7-893d-0fa387e74d32.png)


**If the item is in stock, it will confirm this. It will show the users total price and let you know it's been purchased. In this case, each leather jacket cost $100, so the total price is $200.
![Image](https://user-images.githubusercontent.com/29414935/33977740-f6c900d2-e061-11e7-94c3-35e4130844a2.png)


**Once "node bamazonCustomer.js" is entered again. It will display the updated quantity in stock for the jacket. Now there are 23 jackets instead of the original 25. 
![Image](https://user-images.githubusercontent.com/29414935/33977742-f6f15848-e061-11e7-8a07-bec992838f49.png)


**If the user types in an amount that exceeds what is in stock, it will make that announcement and display the item table again. 
![Image](https://user-images.githubusercontent.com/29414935/33978533-dba74c6a-e065-11e7-8ed5-1fc1f0ba5197.png)
