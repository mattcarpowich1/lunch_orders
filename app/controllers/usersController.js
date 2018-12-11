const Users = require('../models/users.js');

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

  removeUser: (req, res) => {
    const { id } = req.body;

    Users.deleteOne(id)
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
  }
}