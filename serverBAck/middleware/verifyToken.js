const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // console.log("token", token);
  if (!token) return res.status(401).json({ error: "X" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT error", err);
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
