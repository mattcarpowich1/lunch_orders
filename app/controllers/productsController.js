const Products = require('../models/products.js');

module.exports = {
  addProduct: (req, res) => {
    const {
      name,
      price,
      vendorId
    } = req.body;

    Products.insertOne(name, price, vendorId)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  },

  removeProduct: (req, res) => {
    const { id } = req.body;

    Products.deleteOne(id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
  }
}