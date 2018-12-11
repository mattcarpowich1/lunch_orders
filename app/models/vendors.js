const client = require('./connection.js');

module.exports = {
  insertOne: name => {
    return new Promise((resolve, reject) => {
      const text = `INSERT INTO vendors (vendor_name)
        VALUES ($1)
        RETURNING vendor_name`;
      const values = [name];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      });
    });
  },

  deleteOne: id => {
    return new Promise((resolve, reject) => {
      const text = `DELETE FROM vendors WHERE vendor_id=$1 RETURNING vendor_name`;
      const values = [id];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      });
    });
  }, 

  updateOne: (name, id) => {
    return new Promise((resolve, reject) => {
      const text = `UPDATE vendors 
        SET vendor_name=$1 
        WHERE vendor_id=$2
        RETURNING vendor_name`;
      const values = [name, id];

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows[0]);
        }
      })
    })
  }
}