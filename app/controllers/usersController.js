const Users = require('../models/users.js');

module.exports = {
  addUser: function(req, res) {
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
  }
}