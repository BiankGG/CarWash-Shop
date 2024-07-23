const express= require('express');
const router = express.Router()
const { productTest, createProduct,  getAllProduct, editProduct, deleteProduct } = require('../controllers/productController');



router.get("/", productTest);  
router.post("/create", createProduct);
router.get("/all",  getAllProduct)
router.put("/:id", editProduct)
router.delete("/:id", deleteProduct)




module.exports=router