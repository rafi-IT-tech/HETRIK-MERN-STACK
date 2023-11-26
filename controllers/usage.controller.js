const Usage = require('../models/usage.model'); // Adjust the path as needed
const moment = require('moment');
const Device = require('../models/device.model');
const Bangunan = require('../models/dayabangunan.model');
const Room = require('../models/room.model');
const User = require('../models/user.model');

// CREATE - Add new usage record with devices
exports.createUsage = async (req, res) => {
  try {
    const { UserID, RoomID, BuildingPowerID, WaktuMulai, WaktuSelesai, TotalDayaHabiskan, TarifEnergi, BiayaDayaDigunakan, Boros, device } = req.body;

    // Validate if 'device' is an array
    if (!Array.isArray(device)) {
      return res.status(400).json({ error: 'Invalid request format. Expected an array of devices.' });
    }

    // Validate other required fields if needed

  // Calculate time difference
  const momentWaktuMulai = moment(WaktuMulai);
  const momentWaktuSelesai = moment(WaktuSelesai);
  const selisihWaktu = momentWaktuSelesai.diff(momentWaktuMulai, 'hours'); // Change 'minutes' to your desired unit



  console.log("Building Power " , req.body.BuildingPowerID);
     // Inisialisasi variabel untuk menyimpan daya dan power dari setiap device
     const dayaDevice = [];
     const powerDevice = [];
     let totalProductPower = 0; // Inisialisasi totalProductPower
  // Check if RoomID and UserID exist
  const foundRoom = await Room.findById(RoomID);
  const foundUser = await User.findById(UserID);

  if (!foundRoom) {
    return res.status(400).json({ error: `Room with ID ${RoomID} not found.` });
  }

  if (!foundUser) {
    return res.status(400).json({ error: `User with ID ${UserID} not found.` });
  }

     // Loop melalui setiap device untuk mendapatkan daya dan power
     for (const deviceItem of device) {
       const { device_id } = deviceItem;
 
       // Cari device berdasarkan device_id
       const foundDevice = await Device.findById(device_id);
 
       if (!foundDevice) {
         return res.status(400).json({ error: `Device with ID ${device_id} not found.` });
       }
 
       // Ambil daya dan power dari device
       const { product_power } = foundDevice;
 
       // Tambahkan ke dalam array
       dayaDevice.push(product_power);
       powerDevice.push(product_power);
 
       // Tambahkan nilai product_power ke totalProductPower
       totalProductPower += parseFloat(product_power) || 0;

     }

     let TotalDayaHabiskanHitung = (totalProductPower/ 1000)*selisihWaktu;
     let BiayaDayaYangdigunakanHitung = 500 *selisihWaktu; // 500 diambil dari 500.000 / 1000 Kwh = Rp500 /Kwh 

    // Create a usage record
    const newUsage = new Usage({
        UserID: foundUser._id, // Use the actual ID from the foundUser
        RoomID: foundRoom._id, // Use the actual ID from the foundRoom
      BuildingPowerID,
      WaktuMulai,
      WaktuSelesai,
      TotalDayaHabiskan : TotalDayaHabiskanHitung,
      TarifEnergi : 500,
      BiayaDayaDigunakan : BiayaDayaYangdigunakanHitung,
      Boros,
      device, // Assign the array of devices
    });

    // Save the usage record
    const savedUsage = await newUsage.save();
    
    res.status(201).json(savedUsage);
  } catch (error) {
    console.log("Erronya Apa " , error);
    res.status(500).json({ error: error.message });
  }
};

// READ - Get all usage records
exports.getAllUsage = async (req, res) => {
  try {
    const usageRecords = await Usage.find()
      .populate('UserID', 'username')
      .populate('RoomID', 'room_name');

    res.status(200).json(usageRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get usage record by ID
exports.getUsageById = async (req, res) => {
  try {
    const usageRecord = await Usage.findById(req.params.usageId)
      .populate('DeviceID', 'device_name')
      .populate('UserID', 'username')
      .populate('RoomID', 'room_name')
      .populate('BuildingPowerID', 'power_name');

    if (!usageRecord) {
      return res.status(404).json({ message: 'Usage record not found' });
    }

    res.status(200).json(usageRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Update usage record by ID
exports.updateUsageById = async (req, res) => {
  try {
    const updatedUsage = await Usage.findByIdAndUpdate(
      req.params.usageId,
      req.body,
      { new: true }
    ).populate('DeviceID', 'device_name')
     .populate('UserID', 'username')
     .populate('RoomID', 'room_name')
     .populate('BuildingPowerID', 'power_name');

    if (!updatedUsage) {
      return res.status(404).json({ message: 'Usage record not found' });
    }

    res.status(200).json(updatedUsage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Delete usage record by ID
exports.deleteUsageById = async (req, res) => {
  try {
    const deletedUsage = await Usage.findByIdAndDelete(req.params.usageId);
    if (!deletedUsage) {
      return res.status(404).json({ message: 'Usage record not found' });
    }
    res.status(200).json({ message: 'Usage record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
