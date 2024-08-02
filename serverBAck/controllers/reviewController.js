const Review = require("../models/review");
const User = require("../models/user");

//create review
const createReview = async (req, res) => {
  const { user_name, comentario, rating, fecha } = req.body;
  try {
    const newReview = new Review({
      user_name,
      comentario,
      rating,
      fecha,
    });

    const saveReview = await newReview.save();
    console.log(saveReview);
    res.status(201).json(saveReview);
  } catch (error) {
    console.error("error creating review", error);
  }
};

//get all reviews find()

const getAllReviews = async (req, res) => {
  try {
    const Reviews = await Review.find();
    res.json(Reviews);
  } catch (error) {
    console.error("error finding all reviews", error);
  }
};

//delete review findAndDelete()

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(400).json({ message: "review not found" });
    }
    res.status(200).json({ message: "hey,you deleted your review!" });
  } catch (error) {
    console.error("deleting Review", error);
  }
};

//edit review findAndUpdate

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedReviews = await Review.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedReviews) {
      return res.status(404).json({ message: "review was not found" });
    }
    res.status(200).json({ message: "review edited!" });
  } catch (error) {
    console.error("error edited", error);
  }
};

module.exports = {
  createReview,
  getAllReviews,
  deleteReview,
  updateReview,
};
