const Tips = require('../models/tips.model'); // Adjust the path as needed

// CREATE - Add a new tip
exports.createTip = async (req, res) => {
  try {
    const newTip = new Tips(req.body);
    const savedTip = await newTip.save();
    res.status(201).json(savedTip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get all tips
exports.getAllTips = async (req, res) => {
  try {
    const tips = await Tips.find().populate('PaymentMethodID', 'JudulTip'); // Populate the 'PaymentMethodID' field with 'JudulTip'
    res.status(200).json(tips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get tip by ID
exports.getTipById = async (req, res) => {
  try {
    const tip = await Tips.findById(req.params.tipId).populate('PaymentMethodID', 'JudulTip'); // Populate the 'PaymentMethodID' field with 'JudulTip'
    if (!tip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.status(200).json(tip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Update tip by ID
exports.updateTipById = async (req, res) => {
  try {
    const updatedTip = await Tips.findByIdAndUpdate(
      req.params.tipId,
      req.body,
      { new: true }
    ).populate('PaymentMethodID', 'JudulTip'); // Populate the 'PaymentMethodID' field with 'JudulTip'
    if (!updatedTip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.status(200).json(updatedTip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Delete tip by ID
exports.deleteTipById = async (req, res) => {
  try {
    const deletedTip = await Tips.findByIdAndDelete(req.params.tipId);
    if (!deletedTip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.status(200).json({ message: 'Tip deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
