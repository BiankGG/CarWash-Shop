const express = require("express");
const router = express.Router();
const {
  createReview,
  getAllReviews,
  deleteReview,
  updateReview,
} = require("../controllers/reviewController");

//router review endpoint

router.post("/create", createReview);
router.get("/", getAllReviews);
router.delete("/:id", deleteReview);
router.put("/:id", updateReview);
module.exports = router;
