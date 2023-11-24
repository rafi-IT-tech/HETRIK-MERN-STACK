const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const data = req.body;

  const { email, password } = data;

  if (!email || !password) {
    return res.status(400).json({ message: "semua field harus diisi" });
  }

  try {
    const user = await User.findOne({ email: data.email });

    if (!user) {
      return res.json({ message: "email tidak ditemukan" });
    }

    if (user.password !== data.password) {
      return res.json({ message: "password salah" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "secret");

    // set req.headers.authorization
    res.setHeader("authorization", `Bearer ${token}`);

    res.status(200).json({
      message: "berhasil login",
      token,
      userID: user._id,
    });
  } catch (error) {
    res.status(400).json({
      message: "gagal login",
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  let data = req.body;

  const { fullname, username, email, password } = data;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ message: "semua field harus diisi" });
  }

  const checkEmail = await User.findOne({ email: data.email });
  const checkUserName = await User.findOne({ username: data.username });

  if (checkEmail) {
    return res.status(400).json({ message: "email sudah digunakan" });
  }

  if (checkUserName) {
    return res.status(400).json({ message: "username sudah digunakan" });
  }

  try {
    const user = await User.create(data);

    res.status(200).json({
      message: "berhasil membuat user",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal membuat user",
      error: error.message,
    });
  }
};

module.exports = {
  login,
  register,
};