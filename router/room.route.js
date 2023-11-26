const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller'); // Sesuaikan path dengan struktur folder Anda
const { authMiddleware } = require("../middleware/auth");

// Endpoint CRUD untuk ruangan
router.post('/rooms',authMiddleware, roomController.createRoom);
router.get('/rooms',authMiddleware, roomController.getAllRooms);
router.get('/rooms/:roomId', authMiddleware,roomController.getRoomById);
router.put('/rooms/:roomId', authMiddleware,roomController.updateRoomById);
router.delete('/rooms/:roomId',authMiddleware, roomController.deleteRoomById);

module.exports = {
    
  roomRoute:  router
};
