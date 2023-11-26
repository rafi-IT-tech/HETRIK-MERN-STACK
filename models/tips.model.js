const mongoose = require('mongoose');

const tipsSchema = new mongoose.Schema({
  PaymentMethodID: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentMethod', required: true },
  JudulTip: String,
  DeskripsiTip: String
});

const Tips = mongoose.model('Tips', tipsSchema); // Corrected the model name

module.exports = Tips; // Corrected the exported variable name
