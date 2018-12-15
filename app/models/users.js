const client = require('./connection.js');

module.exports = {
  insertOne: (...args) => {
    return new Promise((resolve, reject) => {
      const text = `INSERT INTO users (
        username,
        first_name,
        last_name,
        password_hash,
        is_admin
        )
        VALUES ($1, $2, $3, $4, $5)`;
      const values = args;

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve();
        }
      });
    });
  },

  updateBalance: (amt, id) => {
    return new Promise((resolve, reject) => {
      const text = `UPDATE users 
        SET user_balance = user_balance + $1
        WHERE user_id = $2
        RETURNING user_balance`;
      const values = [amt, id];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      });
    });
  },

  clearBalance: id => {
    return new Promise((resolve, reject) => {
      const text = `UPDATE users
        SET user_balance = 0
        WHERE user_id = $1`;
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

  deleteOne: id => {
    return new Promise((resolve, reject) => {
      const text = `DELETE FROM users WHERE user_id=$1`;
      const values = [id]

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve();
        }
      });
    });
  }
}