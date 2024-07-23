const Service = require("../models/service");
const express = require("express");

//Test working
const serviceTest = (req, res) => {
  res.send("endpoint working");
};

//create each service
const createServices = async (req, res) => {
  const { imagen, nombre, descripcion, precio } = req.body;
  try {
    const newService = new Service({
      imagen,
      nombre,
      descripcion,
      precio,
    });

    const savedService = await newService.save();
    console.log(savedService);
    res.status(201).json(savedService);
  } catch (error) {
    console.error("error creating service:", error);
  }
};
//get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.log(error);
  }
};

//Delete service findByIdDelete(id)
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: "service not found" });
    }
    res.status(200).json({ message: "service deleted" });
  } catch (error) {
    console.error("error deleting:", error);
  }
};

//Edit service put/:id findByIdAndUpdate
const editService = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const editedServices = await Service.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!editedServices) {
      return res.status(404).json({ message: "service not found" });
    }
    res.status(200).json({ message: "service edited", editedServices });
  } catch (error) {
    console.error("Error edited:", error);
  }
};

module.exports = {
  serviceTest,
  getAllServices,
  createServices,
  deleteService,
  editService,
};
