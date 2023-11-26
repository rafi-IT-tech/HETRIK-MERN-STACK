const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Sesuaikan path dengan struktur folder Anda
const { authMiddleware } = require("../middleware/auth");
// Endpoint CRUD
router.post('/users', authMiddleware,userController.createUser);
router.get('/users', authMiddleware,userController.getAllUsers);
router.get('/users/:userId', authMiddleware, userController.getUserById);
router.put('/users/:userId', authMiddleware, userController.updateUserById);
router.delete('/users/:userId', authMiddleware,userController.deleteUserById);

module.exports = {
    userRoute :router};
