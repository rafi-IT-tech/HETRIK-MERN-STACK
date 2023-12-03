const express = require('express');
const router = express.Router();
const usageController = require('../controllers/usage.controller');

// CREATE - Add new usage record with devices
router.post('/usage/create', usageController.createUsage);

// READ - Get all usage records
router.get('/usage', usageController.getAllUsage);

// READ - Get usage record by ID
router.get('/usage/:usageId', usageController.getUsageById);

// New route for getAllByUserId
router.get('/usage/user/:userID', usageController.getAllByUserId);
// UPDATE - Update usage record by ID
router.put('/usage/:usageId', usageController.updateUsageById);

// DELETE - Delete usage record by ID
router.delete('/usage/:usageId', usageController.deleteUsageById);

// Anda dapat menambahkan endpoint-endpoint lainnya sesuai kebutuhan

module.exports = { usageRoute: router };
