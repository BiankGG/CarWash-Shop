const Product = require("../models/products");
const express = require("express");

//test working
const productTest = (req, res) => {
  res.send("endpoint working");
};

//create each product

const createProduct = async (req, res) => {
  const { imagen, nombre, descripcion, precio } = req.body;
  try {
    const newProduct = new Product({
      imagen,
      nombre,
      descripcion,
      precio,
    });
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("error creating product:", error);
  }
};

//get all products
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

//Edit product, findByIdAndUpdate
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const editedProduct = await Product.findByIdAndUpdate(id, update, {
      new: true,
    });
    if (!editedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "the product has been edited", editedProduct });
  } catch (error) {
    console.error("Error edited:", error);
  }
};

//delete product findByIdDelete
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProducts = await Product.findByIdAndDelete(id);
    if (!deleteProducts) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.error("error deleting", error);
  }
};

module.exports = { productTest, createProduct, getAllProduct, editProduct,deleteProduct };
