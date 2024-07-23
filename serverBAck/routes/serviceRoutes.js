const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
  serviceTest,
  getAllServices,
  createServices,
  deleteService,
  editService
} = require("../controllers/serviceController");




router.get("/", serviceTest);  
router.post("/create", createServices);
router.get("/all", getAllServices); 
router.delete('/:id', deleteService)
router.put('/:id', editService)

module.exports = router;
