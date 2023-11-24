const express = require("express");
const { userRoute } = require("./user.route");
// const { todoRoute } = require("./todo.route");
// const { authRoute } = require("./auth.route");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("This is simple todolist api");
});

router.use("/user", userRoute);
// router.use("/todo", todoRoute);
// router.use("/auth", authRoute);

module.exports = {
  allRouter: router,
};