const mongoose = require('mongoose');
const deviceSchema = new mongoose.Schema({
    device_name: String,
    device_category: String,
    product_power: String,
    is_aktif: Boolean,
  });

const Device = mongoose.model("Device", deviceSchema)

module.exports = Device;
