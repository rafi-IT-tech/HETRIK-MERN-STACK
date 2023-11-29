const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');
const { authMiddleware } = require("../middleware/auth");
// CREATE - Tambahkan perangkat baru
router.post('/devices', authMiddleware,deviceController.createDevice);

// READ - Dapatkan semua perangkat
router.get('/devices', authMiddleware,deviceController.getAllDevices);

// READ - Dapatkan perangkat berdasarkan ID
router.get('/devices/:deviceId', authMiddleware,deviceController.getDeviceById);
router.post('/devices/search', authMiddleware,deviceController.searchDevicesByName);

// UPDATE - Perbarui perangkat berdasarkan ID
router.put('/devices/:deviceId', authMiddleware,deviceController.updateDeviceById);

// DELETE - Hapus perangkat berdasarkan ID
router.delete('/devices/:deviceId', authMiddleware,deviceController.deleteDeviceById);


module.exports = {
    deviceRoute: router,
  };