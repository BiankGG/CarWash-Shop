const User = require("../models/user");
const { hashPassword, comparePassword } = require("../bcrypt/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("is it working");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    if (!password || password.length < 8) {
      return res.json({ error: " should be at least 8 characters long" });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "email is used" });
    }
    const hashedPassword = await hashPassword(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "no user found" });
    }
    const matches = await comparePassword(password, user.password);
    if (matches) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      res.json({ error: "password don't match" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Logout endpoint
const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
};

// Get profile endpoint
const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET,(err, user) => {
      if (err) {
        console.error("jwt verification error:", err);
        return res.status(500).json({ error: "Server error" });
      }
      res.json(user);
    });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
