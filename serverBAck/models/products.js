const mongoose = require("mongoose");
const { Schema } = mongoose;

//Product
const productSchema = new Schema({
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
  });

  const ProductModel = mongoose.model("Product", productSchema);

  module.exports = ProductModel