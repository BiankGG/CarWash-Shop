const express = require ("express");
const router = express.Router();
const{ washTest, createWash, getAllWashes, deleteWashes,updateWash }= require('../controllers/washController')



 router.get("/", washTest);
 router.post('/create', createWash);
 router.get("/all",  getAllWashes);
 router.delete('/:id', deleteWashes)
 router.put("/:id", updateWash  )





module.exports= router;