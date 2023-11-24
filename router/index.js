const express = require("express");
const { userRoute } = require("./user.route");
const { authRoute } = require("./auth.route");
const { deviceRoute } = require("./device.route");
const { roomRoute } = require("./room.route");
const { dayaBangunanRoute } = require("./dayabangunan.route");

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
// router.use("/todo", todoRoute);
// router.use("/auth", authRoute);

module.exports = {
  allRouter: router,
};