const { Client } = require('pg');

const client = new Client({
  user: process.env.POSTGRES_USER || 'matthewcarpowich',
  host: process.env.DATABASE_URL || 'localhost',
  database: process.env.POSTGRES_DB || 'lunch_orders_db',
  password: process.env.POSTGRES_PASSWORD || '',
  port: 5432
});

client.connect();

module.exports = client;