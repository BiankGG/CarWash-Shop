const express = require ("express");
const router = express.Router();
const{ createWash, getAllWashes, deleteWashes,updateWash, specificUserWash }= require('../controllers/washController')


//router auth endpoint

 router.post('/create', createWash);
 router.get("/",  getAllWashes);
 router.delete('/:id', deleteWashes)
 router.put("/:id", updateWash  )
 router.get("/user/:id", specificUserWash)





module.exports= router;