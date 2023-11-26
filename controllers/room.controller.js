const Room = require('../models/room.model'); // Sesuaikan path dengan struktur folder Anda

// CREATE - Menambahkan ruangan baru
exports.createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Mendapatkan semua ruangan
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Mendapatkan ruangan berdasarkan ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: 'Ruangan tidak ditemukan' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Mengupdate ruangan berdasarkan ID
exports.updateRoomById = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.roomId,
      req.body,
      { new: true }
    );
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Ruangan tidak ditemukan' });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Menghapus ruangan berdasarkan ID
exports.deleteRoomById = async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.roomId);
    if (!deletedRoom) {
      return res.status(404).json({ message: 'Ruangan tidak ditemukan' });
    }
    res.status(200).json({ message: 'Ruangan berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
