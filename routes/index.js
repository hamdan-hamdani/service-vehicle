const express = require("express");
const route = express.Router();
const vehicleRouter = require("./vehicle");

route.get("/", (req, res, next) => {
  res.json({ success: true, message: "This is api for Vehicle Rental service-vehicle" });
});

route.use("/vehicle", vehicleRouter);

route.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Wrong url, please check documentation",
  });
});

module.exports = route;
