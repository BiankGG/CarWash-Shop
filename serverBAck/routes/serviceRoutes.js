const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  serviceTest,
  getAllServices,
  createServices,
} = require("../controllers/serviceController");




router.get("/", serviceTest);  
router.get("/all", getAllServices); 
router.post("/create", createServices);

module.exports = router;
