const Orders = require('../models/orders.js');
const Users = require('../models/users.js');

module.exports = {
  getOrdersToday: (req, res) => {
    Orders.findAllToday()
    .then(results => res.json(results))
    .catch(err => console.log(err));
  },

  placeOrder: (req, res) => {
    const { 
      userId, 
      productId, 
      orderNotes 
    } = req.body;

    Orders.insertOne(userId, productId, orderNotes)
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
  },

  removeOrder: (req, res) => {
    const { id } = req.body;

    Orders.deleteOne(id)
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
  },

  updateOrderPayment: (req, res) => {
    const { paid, id } = req.body;

    Orders.togglePaid(paid, id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  },

  payAllOrders: (req, res) => {
    const { id } = req.body;

    Orders.payAllOrdersByUser(id)
    .then(res.json(200))
    .catch(err => console.log(err));
  }
}