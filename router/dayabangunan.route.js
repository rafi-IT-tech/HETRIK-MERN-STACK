const express = require('express');
const router = express.Router();
const dayabangunanController = require('../controllers/dayabangunan.controller'); // Sesuaikan path dengan struktur folder Anda
const { authMiddleware } = require("../middleware/auth");

// Endpoint CRUD untuk daya bangunan
router.post('/dayabangunan', authMiddleware,dayabangunanController.createDayabangunan);
router.get('/dayabangunan', authMiddleware,dayabangunanController.getAllDayabangunan);
router.get('/dayabangunan/:dayabangunanId',authMiddleware, dayabangunanController.getDayabangunanById);
router.put('/dayabangunan/:dayabangunanId',authMiddleware, dayabangunanController.updateDayabangunanById);
router.delete('/dayabangunan/:dayabangunanId', authMiddleware,dayabangunanController.deleteDayabangunanById);

module.exports = {
    
   dayaBangunanRoute: router
};
