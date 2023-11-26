const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  RoomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  BuildingPowerID: { type: mongoose.Schema.Types.ObjectId, ref: 'BuildingPower', required: true },
  WaktuMulai: { type: Date, required: true },
  WaktuSelesai: { type: Date, required: true },
  TotalDayaHabiskan: { type: Number, required: true },
  TarifEnergi: { type: Number, required: true },
  BiayaDayaDigunakan: { type: Number, required: true },
  Boros: { type: Boolean, required: true },
});

const Usage = mongoose.model('Usage', usageSchema);

module.exports = Usage;
