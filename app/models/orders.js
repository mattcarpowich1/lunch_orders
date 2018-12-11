const client = require('./connection.js');
const moment = require('moment');

module.exports = {
  findAllToday: () => {
    return new Promise((resolve, reject) => {
      const now = Date.now();
      const start = moment(now).startOf('day').format('YYYY-MM-DD HH:MM:ss');
      const end = moment(now).endOf('day').format('YYYY-MM-DD HH:MM:ss');
      const query = {
        text: `SELECT * FROM orders WHERE created_at >= $1 AND created_at <= $2`,
        values: [start, end]
      };

      client.query(query, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows);
        }
      });
    });
  },

  insertOne: (userId, productId, notes) => {
    return new Promise((resolve, reject) => {
      const text = `INSERT INTO orders (
        order_user_id,
        order_product_id,
        order_notes
        )
        VALUES ($1, $2, $3)`;
      const values = [userId, productId, notes];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve();
        }
      });
    });
  },

  deleteOne: id => {
    return new Promise((resolve, reject ) => {
      const text = `DELETE FROM orders WHERE order_id=$1`;
      const values = [id];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve();
        }
      });
    });
  },

  togglePaid: (paid, id) => {
    return new Promise((resolve, reject) => {
      const text = `UPDATE orders 
        SET order_paid=$1 
        WHERE order_id=$2
        RETURNING order_id`;
      const values = [paid, id];

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