const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    room_name: String,
    luas_ruangan: String,
    is_aktif: Boolean,
  });

const Room = mongoose.model("Room", roomSchema)

module.exports = Room;
