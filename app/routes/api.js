const express            = require('express');
const router             = express.Router();
const UsersController    = require('../controllers/usersController.js');
const OrdersController   = require('../controllers/ordersController.js');
const VendorsController  = require('../controllers/vendorsController.js');
const ProductsController = require('../controllers/productsController.js');

// User routes
router.post('/addUser', UsersController.addUser);
router.put('/updateUserBalance', UsersController.updateUserBalance);
router.put('/updateUserInfo', UsersController.updateUserInfo);
router.put('/clearUserBalance', UsersController.clearUserBalance);
router.delete('/removeUser', UsersController.removeUser);

// Order routes
router.get('/getOrdersToday', OrdersController.getOrdersToday);
router.get('/getOrdersByUser', OrdersController.getOrdersByUser);
router.post('/placeOrder', OrdersController.placeOrder);
router.delete('/removeOrder', OrdersController.removeOrder);

// Vendor routes
router.get('/getVendors', VendorsController.getVendors);
router.post('/addVendor', VendorsController.addVendor);
router.put('/updateVendor', VendorsController.updateVendor);
router.delete('/removeVendor', VendorsController.removeVendor);

// Product routes
router.get('/getProducts', ProductsController.getProducts);
router.post('/addProduct', ProductsController.addProduct);
router.put('/updateProduct', ProductsController.updateProduct);
router.delete('/removeProduct', ProductsController.removeProduct);

module.exports = router;