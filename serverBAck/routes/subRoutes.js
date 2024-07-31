const express = require("express");
const router = express.Router();

const {
  createSubscription,
  getMySubs,
  deleteSubs,
  updateSubs,
  specificUserSubs, 
  specificSubscripcionId,
} = require("../controllers/subsController");


//router auth endpoint
router.post("/create", createSubscription);
router.get("/", getMySubs);
router.delete("/:id", deleteSubs);
router.put('/:id', updateSubs)
router.get('/user/:id',specificUserSubs)
router.get('/:id',specificSubscripcionId)



module.exports = router;
