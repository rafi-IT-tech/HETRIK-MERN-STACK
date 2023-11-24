const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller'); // Sesuaikan path dengan struktur folder Anda

// Endpoint CRUD untuk ruangan
router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getAllRooms);
router.get('/rooms/:roomId', roomController.getRoomById);
router.put('/rooms/:roomId', roomController.updateRoomById);
router.delete('/rooms/:roomId', roomController.deleteRoomById);

module.exports = {
    
  roomRoute:  router
};
