const express = require('express');
const router = express.Router();
const paymentMethodController = require('../controllers/paymentMethod.controller'); // Adjust the path as needed
const { authMiddleware } = require("../middleware/auth");

// Endpoint CRUD for payment methods
router.post('/paymentMethods/checkPaymentMethodsExist', authMiddleware,paymentMethodController.checkPaymentMethodsExist);

router.post('/paymentMethods', authMiddleware,paymentMethodController.createPaymentMethod);
router.get('/paymentMethods', authMiddleware,paymentMethodController.getAllPaymentMethods);
router.get('/paymentMethods/:paymentMethodId', authMiddleware,paymentMethodController.getPaymentMethodById);
router.put('/paymentMethods/:paymentMethodId', authMiddleware,paymentMethodController.updatePaymentMethodById);
router.delete('/paymentMethods/:paymentMethodId', authMiddleware,paymentMethodController.deletePaymentMethodById);

module.exports = {paymentRoute: router};
