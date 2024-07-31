const express= require('express');
const router = express.Router()
const {  createProduct,  getAllProduct, editProduct, deleteProduct } = require('../controllers/productController');


//router auth endpoint
router.get("/",  getAllProduct)
router.post("/create", createProduct);
router.put("/:id", editProduct)
router.delete("/:id", deleteProduct)




module.exports=router