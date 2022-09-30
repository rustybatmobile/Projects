-- creating the cities table

CREATE TABLE cities (city_id INT PRIMARY KEY, city VARCHAR(20), state VARCHAR(20));
DESCRIBE cities;

INSERT INTO cities (city_id, city, state) values (1, "coimbatore", "TN");
INSERT INTO cities (city_id, city, state) values (2, "chennai", "TN");
INSERT INTO cities (city_id, city, state) values (3, "Bangalore", "Karnataka");
INSERT INTO cities (city_id, city, state) values (4, "Vizak", "andhra");
INSERT INTO cities (city_id, city, state) values (5, "mumbai", "Maharashtra");
INSERT INTO cities (city_id, city, state) values (6, "Delhi", "UP");

-- creating the warehouses table

CREATE TABLE warehouses (w_id INT PRIMARY KEY, w_name VARCHAR(30), city_id VARCHAR(30)); 


INSERT INTO warehouses (w_id, w_name, city_id) values (1, "Slytherin", 2);
INSERT INTO warehouses (w_id, w_name, city_id) values (2, "Hufflepuff", 4);
INSERT INTO warehouses (w_id, w_name, city_id) values (3, "Gryffindor", 1);
INSERT INTO warehouses (w_id, w_name, city_id) values (4, "Ravenclaw", 3);
INSERT INTO warehouses (w_id, w_name, city_id) values (5, "Albus", 5);
INSERT INTO warehouses (w_id, w_name, city_id) values (6, "Wolfric", 4);
INSERT INTO warehouses (w_id, w_name, city_id) values (7, "Brian", 6);
INSERT INTO warehouses (w_id, w_name, city_id) values (8, "Dumbledore", 2);
INSERT INTO warehouses (w_id, w_name, city_id) values (9, "Snape", 1);
INSERT INTO warehouses (w_id, w_name, city_id) values (10, "McGonagall", 6);


-- creating the stores table

CREATE TABLE stores (s_id INT PRIMARY KEY, store_name VARCHAR(20), city_id INT, warehouse_id INT);

INSERT INTO stores values (1, "Walmart", 1, 7);
INSERT INTO stores values (2, "CostCo", 3, 4);
INSERT INTO stores values (3, "Walgreens", 4, 5);
INSERT INTO stores values (4, "Home depot", 2, 4);
INSERT INTO stores values (5, "Target", 5, 1);
INSERT INTO stores values (6, "Best Buy", 6, 4);
INSERT INTO stores values (7, "CVS Health", 2, 3);
INSERT INTO stores values (8, "McDonalds", 4, 2);
INSERT INTO stores values (9, "Verizon", 6, 2);
INSERT INTO stores values (10, "Apple store", 5, 8);

-- creating the customers table

CREATE TABLE customers (cust_id INT PRIMARY KEY, cust_name VARCHAR(20), cust_address VARCHAR(20), city_id int);

INSERT INTO customers values (1, "Anjali", "425 boulevard street", 2);
INSERT INTO customers values (2, "Tarun", "512 Central park", 5);
INSERT INTO customers values (3, "Dinesh", "City park", 3);
INSERT INTO customers values (4, "Pavi", "Silicon valley", 1);
INSERT INTO customers values (5, "Raghul", "Koramangala", 2);
INSERT INTO customers values (6, "Jayanth", "SG Palaya", 4);


-- Creating the orders table 

CREATE TABLE orders (order_id INT PRIMARY KEY, order_date DATE, cust_id int, item_no int);

INSERT INTO orders values (1, "2022-08-28", 4, 1);
INSERT INTO orders values (2, "2022-08-29", 5, 3);
INSERT INTO orders values (3, "2022-08-30", 6, 4);
INSERT INTO orders values (4, "2022-08-31", 2, 5);
INSERT INTO orders values (5, "2022-09-01", 3, 8);
INSERT INTO orders values (6, "2022-09-02", 1, 7);
INSERT INTO orders values (7, "2022-09-03", 5, 2);

-- create the items table

CREATE TABLE items (item_no INT PRIMARY KEY, description VARCHAR(20), weight INT, cost INT);

DROP TABLE items;

INSERT INTO items values (1, "MacBook M1", 23, 500);
INSERT INTO items values (2, "Alexa", 40, 200);
INSERT INTO items values (3, "Airpods", 50, 300);
INSERT INTO items values (4, "Levovo trackpad", 20, 400);
INSERT INTO items values (5, "Blackberry", 30, 100);
INSERT INTO items values (6, "Samsung S22", 40, 800);
INSERT INTO items values (7, "iPad", 70, 700);
INSERT INTO items values (8, "iPhone", 60, 750);



