const Orders = require('../models/orders.js');

module.exports = {
  getOrdersToday: function(req, res) {
    Orders.findAllToday()
    .then(results => res.json(results))
    .catch(err => console.log(err));
  }
}