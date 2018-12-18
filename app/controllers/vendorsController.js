const Vendors = require('../models/vendors.js');

module.exports = {
  getVendors: (req, res) => {
    Vendors.findAll()
    .then(results => res.json(results))
    .catch(err => console.log(err));
  },

  addVendor: (req, res) => {
    const { name } = req.body;

    Vendors.insertOne(name)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  },

  removeVendor: (req, res) => {
    const { id } = req.body;

    Vendors.deleteOne(id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  },

  updateVendor: (req, res) => {
    const { name, id } = req.body;

    Vendors.updateOne(name, id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  }
}