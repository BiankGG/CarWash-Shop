const express = require ("express");
const router = express.Router();
const{ washTest, createWash, getAllWashes, deleteWashes,updateWash, specificUserWash }= require('../controllers/washController')


//router auth endpoint
 router.get("/", washTest);
 router.post('/create', createWash);
 router.get("/all",  getAllWashes);
 router.delete('/:id', deleteWashes)
 router.put("/:id", updateWash  )
 router.get("/user/:id", specificUserWash)





module.exports= router;