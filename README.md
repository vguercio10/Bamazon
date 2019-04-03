# Bamazon

### Description
###### Bamazon is a simple command line interface application.  Bamazon is an Amazon-like storefront in which the application can take in orders from customers and deplete the stock from the store's inventory. The application presents a customer interface.

### What you need for the Customer Interface
###### For this application you will need to have MySQL database installed. Then you would will also need a MySQL client like DBeaver. Once you have those you can install the node packages and your ready to run the code!

### Customer Interface
###### The customer interface allows the user to view the store items by ID, product name, department name, price, and stock quantity. The customer is prompted to pick an item by item ID that they would like to purchase and what quantity they would like to purchase. If the item is in stock the user is shown the cost of their purchase and the updated stock quantity. If the item is not in stock or if the user would like to purchase over the stock quanity, the user is informed of insufficient stock quantity.


#### This is an example of the customer purchasing an item from the store :
![bamazonpurchase](https://user-images.githubusercontent.com/47366649/55293906-941d7080-53c9-11e9-9f7b-641eae63d15b.gif)



#### This is an example of the customer trying to purchase more than the stock quantity :
![bamazoninsufficientquant2](https://user-images.githubusercontent.com/47366649/55445423-4c454780-5589-11e9-8fba-f5d523cefd56.gif)