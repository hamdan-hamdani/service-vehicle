const express = require("express");
const route = express.Router();

const vehicleController = require("../controller/vehicle");

route.post("/", vehicleController.createNewVehicle);
route.get("/", vehicleController.getConditionVehicle);
route.get("/category", vehicleController.getCategoryVehicle);
route.put("/:id", vehicleController.updateVehicle);
route.delete("/:id", vehicleController.deleteVehicle);

module.exports = route;
