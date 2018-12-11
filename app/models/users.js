const client = require('./connection.js');

module.exports = {
  insertOne: function(...args) {
    return new Promise(function(resolve, reject) {
      const text = `INSERT INTO users (
        username,
        first_name,
        last_name,
        password_hash,
        is_admin
        )
        VALUES ($1, $2, $3, $4, $5)`;
      const values = args;

      client.query(text, values, function(err, res) {
        if (err) {
          reject(err.stack);
        } else {
          resolve();
        }
      });
    });
  }
}