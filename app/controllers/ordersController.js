const Orders = require('../models/orders.js');
const Users = require('../models/users.js');

module.exports = {
  getOrdersToday: (req, res) => {
    Orders.findAllToday()
    .then(results => res.json(results))
    .catch(err => console.log(err));
  },

  getOrdersByUser: (req, res) => {
    const { user_id } = req.query;

    Orders.findAllByUser(user_id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
  },

  placeOrder: async (req, res) => {
    const { 
      userId, 
      productId, 
      orderNotes 
    } = req.body;

    const orderId = await Orders
      .insertOne(userId, productId, orderNotes)
      .catch(err => console.log(err));

    const price = await Orders
      .findOrderPrice(orderId)
      .catch(err => console.log(err));

    const balance = await Users
      .updateBalance(price, userId)
      .catch(err => console.log(err));

    res.json({balance});
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
  }
}