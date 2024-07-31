const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
  getAllServices,
  createServices,
  deleteService,
  editService,
} = require("../controllers/serviceController");

//router auth endpoint
router.post("/create", createServices);
router.get("/", getAllServices);
router.delete("/:id", deleteService);
router.put("/:id", editService);

module.exports = router;
