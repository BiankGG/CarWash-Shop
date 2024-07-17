const mongoose = require("mongoose");
const { Schema } = mongoose;

//user Shemas
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model("User", userSchema);



module.exports = UserModel
