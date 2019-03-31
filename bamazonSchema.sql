-- Structure of database and table
DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_Name VARCHAR(45) NULL,
  department_Name VARCHAR(45) NULL,
  price DECIMAL (10) NULL,
  stock_quantity INTEGER (10),
  PRIMARY KEY (id)
);