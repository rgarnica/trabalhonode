const express = require('express');
const router = express.Router();

const customer_controller = require('../controllers/customer.controller');

router.get('/consultar', customer_controller.index);
router.post('/incluir', customer_controller.store);

module.exports = router;
