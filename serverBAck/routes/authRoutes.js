const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/authController");
const verifyToken= require("../middleware/verifyToken")


//router auth endpoint
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout",verifyToken, logoutUser);
router.get("/profile",verifyToken, getProfile);

module.exports = router;
