const Products = require('../models/products.js');

module.exports = {
  getProducts: (req, res) => {
    Products.findAll()
    .then(results => res.json(results))
    .catch(err => console.log(err));
  },

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

  updateProduct: (req, res) => {
    const {
      name, 
      price, 
      id
    } = req.body;

    Products.updateOne(name, price, id)
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