const express = require("express");
const router = express.Router();

const {
  subTest,
  createSubscription,
  getMySubs,
  deleteSubs,
  updateSubs,
  specificUserSubs, 
  specificSubscripcionId,
} = require("../controllers/subsController");


//router auth endpoint
router.get("/", subTest);
router.post("/create", createSubscription);
router.get("/getAll", getMySubs);
router.delete("/:id", deleteSubs);
router.put('/:id', updateSubs)
router.get('/user/:id',specificUserSubs)
router.get('/:id',specificSubscripcionId)



module.exports = router;
