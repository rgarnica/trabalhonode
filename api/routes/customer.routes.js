const express = require('express');
const router = express.Router();

const customer_controller = require('../controllers/customer.controller');

router.get('/api/customer', customer_controller.index);
router.post('/api/customer', customer_controller.store);

module.exports = router;
