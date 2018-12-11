CREATE DATABASE lunch_orders_db;

\c lunch_orders_db;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password_hash VARCHAR(1000) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE restaurants (
  restaurant_id serial PRIMARY KEY,
  restaurant_name VARCHAR(100) NOT NULL UNIQUE,
  restaurant_phone_number VARCHAR(64) CHECK (LENGTH(restaurant_phone_number) = 10)
);

CREATE TABLE products (
  product_id serial PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  product_price REAL NOT NULL,
  product_restaurant_id INTEGER NOT NULL REFERENCES restaurants(restaurant_id)
);

CREATE TABLE orders (
  order_id serial PRIMARY KEY,
  order_user_id INTEGER NOT NULL REFERENCES users(user_id),
  order_product_id INTEGER NOT NULL REFERENCES products(product_id),
  order_notes VARCHAR(1000),
  order_paid BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders_products (
  op_order_id INTEGER REFERENCES orders(order_id),
  op_product_id INTEGER REFERENCES products(product_id),
  CONSTRAINT orders_products_pkey PRIMARY KEY (op_order_id, op_product_id)
);

