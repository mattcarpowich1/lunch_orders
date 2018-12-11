const client = require('./connection.js');
const moment = require('moment');

module.exports = {
  findAllToday: () => {
    return new Promise(function(resolve, reject) {
      const now = Date.now();
      const start = moment(now).startOf('day').format('YYYY-MM-DD HH:MM:ss');
      const end = moment(now).endOf('day').format('YYYY-MM-DD HH:MM:ss');
      const query = {
        text: `SELECT * FROM orders WHERE created_at >= $1 AND created_at <= $2`,
        values: [start, end]
      };

      client.query(query, function(err, res) {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows);
        }
      });
    });
  }
}