const mongoose = require("mongoose");
const { Schema } = mongoose;

//Service
const serviceSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
  });
  const ServiceModel = mongoose.model("Service", serviceSchema);

  module.exports = ServiceModel