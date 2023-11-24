const mongoose = require('mongoose');
const DayabangunanSchema = new mongoose.Schema({
    building_name: String,
    powerCapacity: Number,
  });

const Dayabangunan = mongoose.model("Dayabangunan", DayabangunanSchema)

module.exports = Dayabangunan;
