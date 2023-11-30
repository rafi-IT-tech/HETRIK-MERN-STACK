// models/paymentMethod.js
const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  JenisPembayaran: String,
  NomorKartu: String,
  TanggalKadaluarsa: String,
  NamaPemilikKartu: String,
  DayaBangunan: String,
});

// Drop the unique index on UserID if it exists
paymentMethodSchema.index({ UserID: 1 }, { unique: false });

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);

module.exports = PaymentMethod;
