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
router.get("/all", getAllServices); 
router.post("/create", createServices);
router.delete('/:id', deleteService)
router.put('/:id', editService)

module.exports = router;
