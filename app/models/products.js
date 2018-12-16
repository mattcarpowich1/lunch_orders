const client = require('./connection.js');

module.exports = {
  insertOne: (name, price, vendorId) => {
    return new Promise((resolve, reject) => {
      const text = `INSERT INTO products (product_name, product_price, product_vendor_id)
        VALUES ($1, $2, $3)
        RETURNING product_name, product_price`;
      const values = [name, price, vendorId];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      });
    });
  },

  updateOne: (name, price, id) => {
    return new Promise((resolve, reject) => {
      const text = `UPDATE products
        SET product_name = $1, product_price = $2
        WHERE product_id = $3
        RETURNING product_name, product_price`;
      const values = [name, price, id];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      })
    })
  },

  deleteOne: id => {
    return new Promise((resolve, reject) => {
      const text = `DELETE FROM products 
        WHERE product_id=$1 
        RETURNING product_name`;
      const values = [id];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      });
    });
  }
}