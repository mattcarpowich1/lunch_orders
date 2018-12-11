CREATE DATABASE lunch_orders_db;

\c lunch_orders_db;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password_hash VARCHAR(1000) NOT NULL,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE vendors (
  vendor_id serial PRIMARY KEY,
  vendor_name VARCHAR(100) NOT NULL UNIQUE,
  vendor_phone_number VARCHAR(64) CHECK (LENGTH(vendor_phone_number) = 10)
);

CREATE TABLE products (
  product_id serial PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  product_price REAL NOT NULL,
  product_vendor_id INTEGER NOT NULL REFERENCES vendors(vendor_id) ON DELETE CASCADE
);

CREATE TABLE orders (
  order_id serial PRIMARY KEY,
  order_user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  order_product_id INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
  order_notes VARCHAR(1000),
  order_paid BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

