const express = require("express");
const { userRoute } = require("./user.route");
const { authRoute } = require("./auth.route");
const { deviceRoute } = require("./device.route");
const { roomRoute } = require("./room.route");
const { dayaBangunanRoute } = require("./dayabangunan.route");
const { paymentRoute } = require("./payment.route");
const { tipsRoute } = require("./tips.route");
const { usageRoute } = require("./usage.router");

// const { todoRoute } = require("./todo.route");
// const { authRoute } = require("./auth.route");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("This is simple todolist api");
});

router.use("/user", userRoute);
router.use("/auth", authRoute);
router.use("/device", deviceRoute);
router.use("/dayaBangunan", dayaBangunanRoute);
router.use("/room", roomRoute);
router.use("/payment", paymentRoute);
router.use("/tip",tipsRoute);
router.use("/hitung", usageRoute);
// router.use("/todo", todoRoute);
// router.use("/auth", authRoute);

module.exports = {
  allRouter: router,
};