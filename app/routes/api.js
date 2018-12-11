const express          = require('express');
const router           = express.Router();
const UsersController  = require('../controllers/usersController.js');
const OrdersController = require('../controllers/ordersController.js');

router.get('/findAllOrdersToday', OrdersController.getOrdersToday);
router.post('/addNewUser', UsersController.addUser);

module.exports = router;