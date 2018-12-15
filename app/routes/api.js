const express            = require('express');
const router             = express.Router();
const UsersController    = require('../controllers/usersController.js');
const OrdersController   = require('../controllers/ordersController.js');
const VendorsController  = require('../controllers/vendorsController.js');
const ProductsController = require('../controllers/productsController.js');

// User routes
router.post('/addUser', UsersController.addUser);
router.put('/updateUserBalance', UsersController.updateUserBalance);
// Clears balance and sets all orders for this user to order_paid = TRUE
router.put('/clearUserBalance', UsersController.clearUserBalance);
router.delete('/removeUser', UsersController.removeUser);

// Order routes
router.get('/getOrdersToday', OrdersController.getOrdersToday);
router.post('/placeOrder', OrdersController.placeOrder);
router.put('/updateOrderPayment', OrdersController.updateOrderPayment);
router.put('/payAllOrders', OrdersController.payAllOrders);
router.delete('/removeOrder', OrdersController.removeOrder);

// Vendor routes
router.post('/addVendor', VendorsController.addVendor);
router.put('/updateVendor', VendorsController.updateVendor);
router.delete('/removeVendor', VendorsController.removeVendor);

// Product routes
router.post('/addProduct', ProductsController.addProduct);
router.delete('/removeProduct', ProductsController.removeProduct);

module.exports = router;