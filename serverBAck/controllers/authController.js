const User = require("../models/user");
const { hashPassword, comparePassword } = require("../bcrypt/auth");
const jwt = require("jsonwebtoken");



// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "name is required" });
    }
    if (!password || password.length < 8) {
      return res.json({ error: " should be at least 8 characters long" });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "email is used" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPassword});
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
      return res.status(404).json({ error: "no user found" });
    }
    const matches = await comparePassword(password, user.password);
    if (matches) {
      const token = jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.cookie("token", token, {
        httpOnly: true
      }).json(user);
    } else {
      res.status(401).json({ error: "password doesn't match" });
    }
  } catch (error) {
    console.error("error login:", error);
    res.status(500).json({ error: "server error" });
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
    jwt.verify(token, process.env.JWT_SECRET,{},(err, user) => {
      if (err) {
        console.error("jwt error:", err);
        return res.status(500).json({ error: "Server error" });
      }
      res.json(user);
    });
  } else {
    res.json(null)
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
