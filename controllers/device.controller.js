const Device = require('../models/device.model'); // Sesuaikan path jika perlu

// CREATE - Tambahkan perangkat baru
exports.createDevice = async (req, res) => {
  try {
    const newDevice = new Device(req.body);
    const savedDevice = await newDevice.save();
    res.status(201).json(savedDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// SEARCH - Cari perangkat berdasarkan nama
exports.searchDevicesByName = async (req, res) => {
  try {
    const keyword = req.body.name;
    if (!keyword) {
      return res.status(400).json({ message: 'Name parameter is required for search' });
    }

    const devices = await Device.find({ device_name: { $regex: new RegExp(keyword, 'i') } });

    if (devices.length === 0) {
      return res.status(404).json({ message: 'No devices found with the given name' });
    }

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Dapatkan semua perangkat
exports.getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Dapatkan perangkat berdasarkan ID
exports.getDeviceById = async (req, res) => {
  try {
    const device = await Device.findById(req.params.deviceId);
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Perbarui perangkat berdasarkan ID
exports.updateDeviceById = async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      req.params.deviceId,
      req.body,
      { new: true }
    );
    if (!updatedDevice) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.status(200).json(updatedDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Hapus perangkat berdasarkan ID
exports.deleteDeviceById = async (req, res) => {
  try {
    const deletedDevice = await Device.findByIdAndDelete(req.params.deviceId);
    if (!deletedDevice) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.status(200).json({ message: 'Device deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
