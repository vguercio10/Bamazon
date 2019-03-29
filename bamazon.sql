DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_Name VARCHAR(45) NULL,
  department_Name VARCHAR(45) NULL,
  price INTEGER(10) NULL,
  stock_quantity
  PRIMARY KEY (id)
);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("diapers", "baby", 28.99, 200);
INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("baby Wipes", "baby", 10.99, 500);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("socks", "apparel", 6.99, 300);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("shirts", "apparel", 10, 400);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("pants", "apparel", 20, 600);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("dvd", "entertainment", 25, 100);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("cd" "entertainment", 20, 400);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("screwdriver", "tools", 5, 100);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("wrench", "tools", 10, 200);

INSERT INTO products (product_Name, department_Name, price, stock_quantity)
VALUES ("hammer", "tools", 15, 200);

