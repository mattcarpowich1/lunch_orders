\c lunch_orders_db;

INSERT INTO users (username, first_name, last_name, password_hash, is_admin)
VALUES (
  'skipcarpowich',
  'Skip',
  'Carpowich',
  'zzzzzzz',
  TRUE
);

INSERT INTO users (username, first_name, last_name, password_hash) 
VALUES (
  'mattcarpowich',
  'Matt',
  'Carpowich',
  'aaaaaaa'
);

INSERT INTO vendors (vendor_name)
VALUES (
  'Subway'
);

INSERT INTO products (product_name, product_price, product_vendor_id)
VALUES (
  '6 Inch Meatball Sub',
  5.50,
  1
);

INSERT INTO orders (order_user_id, order_product_id, order_notes) 
VALUES (
  2,
  1,
  'no onions please'
);
