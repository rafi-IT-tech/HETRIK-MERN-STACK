const Dayabangunan = require('../models/dayabangunan.model'); // Sesuaikan path dengan struktur folder Anda

// CREATE - Menambahkan daya bangunan baru
exports.createDayabangunan = async (req, res) => {
  try {
    const newDayabangunan = new Dayabangunan(req.body);
    const savedDayabangunan = await newDayabangunan.save();
    res.status(201).json(savedDayabangunan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Mendapatkan semua daya bangunan
exports.getAllDayabangunan = async (req, res) => {
  try {
    const dayabangunan = await Dayabangunan.find();
    res.status(200).json(dayabangunan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Mendapatkan daya bangunan berdasarkan ID
exports.getDayabangunanById = async (req, res) => {
  try {
    const dayabangunan = await Dayabangunan.findById(req.params.dayabangunanId);
    if (!dayabangunan) {
      return res.status(404).json({ message: 'Daya bangunan tidak ditemukan' });
    }
    res.status(200).json(dayabangunan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Mengupdate daya bangunan berdasarkan ID
exports.updateDayabangunanById = async (req, res) => {
  try {
    const updatedDayabangunan = await Dayabangunan.findByIdAndUpdate(
      req.params.dayabangunanId,
      req.body,
      { new: true }
    );
    if (!updatedDayabangunan) {
      return res.status(404).json({ message: 'Daya bangunan tidak ditemukan' });
    }
    res.status(200).json(updatedDayabangunan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Menghapus daya bangunan berdasarkan ID
exports.deleteDayabangunanById = async (req, res) => {
  try {
    const deletedDayabangunan = await Dayabangunan.findByIdAndDelete(req.params.dayabangunanId);
    if (!deletedDayabangunan) {
      return res.status(404).json({ message: 'Daya bangunan tidak ditemukan' });
    }
    res.status(200).json({ message: 'Daya bangunan berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
