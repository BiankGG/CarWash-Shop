const mongoose = require("mongoose");
const { schema } = mongoose;

const ReviewSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  comentario: { type: String, required: true },
  rating: { type: Number, required: true},
  fecha: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model("Review", ReviewSchema);
module.exports = ReviewModel;
