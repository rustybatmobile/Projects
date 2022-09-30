-- finding an item that has minimum weight

SELECT * FROM items where weight = (select min(weight) from items);

-- finding all the warehouses in bangalore

SELECT * FROM warehouses where city_id = (select city_id from cities where city = "Bangalore");

-- finding the details of the items ordered by a customer Anjali


SELECT customers.cust_id, customers.cust_name, orders.order_id, orders.item_no, items.description FROM customers INNER JOIN orders ON customers.cust_id = orders.cust_id 
INNER JOIN items ON orders.item_no = items.item_no WHERE customers.cust_name = "Anjali";

-- find a warehouse which has max stores

SELECT w_id, w_name from warehouses where w_id = (SELECT warehouse_id from stores GROUP BY warehouse_id ORDER BY COUNT(s_id) desc limit 1);

-- Find an item which is ordered minimum number of times

SELECT items.item_no, COUNT(orders.order_id) as item_purchase_count from items GROUP BY items.item_no LEFT JOIN orders on items.item_no = orders.item_no;


-- detailed orders given by each customer

SELECT customers.cust_id, customers.cust_name, orders.order_id, items.description, items.weight from customers RIGHT JOIN orders ON customers.cust_id = orders.cust_id INNER JOIN items on orders.item_no = items.item_no;