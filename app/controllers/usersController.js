const Users = require('../models/users.js');
const Orders = require('../models/orders.js');

module.exports = {
  addUser: (req, res) => {
    const {
      username,
      firstName,
      lastName,
      password,
      isAdmin
    } = req.body;

    Users.insertOne(
      username,
      firstName,
      lastName,
      password,
      isAdmin
    )
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
  },

  updateUserBalance: (req, res) => {
    const { amt, id } = req.body;

    Users.updateBalance(amt, id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  },

  clearUserBalance: async (req, res) => {
    const { id } = req.body;

    await Users.clearBalance(id).catch(err => console.log(err));
    await Orders.payAllOrdersByUser(id).catch(err => console.log(err));
    res.sendStatus(200);
  },

  removeUser: (req, res) => {
    const { id } = req.body;

    Users.deleteOne(id)
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
  }
}