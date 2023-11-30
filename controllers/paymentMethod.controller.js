const PaymentMethod = require('../models/paymentMethod.model'); // Adjust the path as needed

// CREATE - Add a new payment method
exports.createPaymentMethod = async (req, res) => {
  try {
    const newPaymentMethod = new PaymentMethod(req.body);
    const savedPaymentMethod = await newPaymentMethod.save();
    res.status(201).json(savedPaymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.checkPaymentMethodsExist = async (req, res) => {
  try {
    const { userId } = req.body; // Extracting userId from the request body

    // Check if payment methods exist for the specified user
    const existingPaymentMethods = await PaymentMethod.find({ UserID: userId }).populate('UserID', 'username');
    if (!existingPaymentMethods || existingPaymentMethods.length === 0) {
      return res.status(404).json({ message: 'Payment methods not found for the specified user' });
    }

    res.status(200).json(existingPaymentMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get all payment methods
exports.getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find().populate('UserID', 'username'); // Populate the 'UserID' field with 'username'
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get payment method by ID
exports.getPaymentMethodById = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.paymentMethodId).populate('UserID', 'username'); // Populate the 'UserID' field with 'username'
    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }
    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Update payment method by ID
exports.updatePaymentMethodById = async (req, res) => {
  try {
    const updatedPaymentMethod = await PaymentMethod.findByIdAndUpdate(
      req.params.paymentMethodId,
      req.body,
      { new: true }
    ).populate('UserID', 'username'); // Populate the 'UserID' field with 'username'
    if (!updatedPaymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }
    res.status(200).json(updatedPaymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Delete payment method by ID
exports.deletePaymentMethodById = async (req, res) => {
  try {
    const deletedPaymentMethod = await PaymentMethod.findByIdAndDelete(req.params.paymentMethodId);
    if (!deletedPaymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }
    res.status(200).json({ message: 'Payment method deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
