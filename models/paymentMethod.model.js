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

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);

module.exports = PaymentMethod;
