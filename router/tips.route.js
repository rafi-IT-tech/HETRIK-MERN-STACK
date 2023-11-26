const express = require('express');
const router = express.Router();
const tipsController = require('../controllers/tips.controller'); // Adjust the path as needed
const { authMiddleware } = require("../middleware/auth");


// Endpoint CRUD for tips
router.post('/tips', authMiddleware,tipsController.createTip);
router.get('/tips', authMiddleware,tipsController.getAllTips);
router.get('/tips/:tipId',authMiddleware, tipsController.getTipById);
router.put('/tips/:tipId', authMiddleware,tipsController.updateTipById);
router.delete('/tips/:tipId', authMiddleware,tipsController.deleteTipById);

module.exports = { tipsRoute:router};
