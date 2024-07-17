const Service = require("../models/service");
const express = require("express");

const serviceTest = (req, res) => {
  res.send("endpoint working");
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

//create each service
const createServices = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  try {
    const newService = new Service({
      nombre,
      descripcion,
      precio,
    });

    const savedService = await newService.save();
    console.log(savedService)
    res.status(201).json(savedService);
  } catch (error) {
    console.error("Error creating service:", error);
  }
};

module.exports = {
  serviceTest,
  getAllServices,
  createServices,
};
