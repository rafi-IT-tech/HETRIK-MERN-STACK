const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Sesuaikan path dengan struktur folder Anda

// Endpoint CRUD
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.updateUserById);
router.delete('/users/:userId', userController.deleteUserById);

module.exports = {
    userRoute :router};
