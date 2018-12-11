const express          = require('express');
const router           = express.Router();
const OrdersController = require('../controllers/ordersController.js');

router.get('/findAllOrdersToday', OrdersController.getOrdersToday);

module.exports = router;