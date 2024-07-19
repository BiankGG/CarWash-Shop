const mongoose = require("mongoose");
const { Schema } = mongoose;

//Service
const serviceSchema = new Schema({
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
  });

  const ServiceModel = mongoose.model("Service", serviceSchema);

  module.exports = ServiceModel