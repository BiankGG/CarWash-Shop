const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

//variables de entorno
dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//connect cors(back&front)
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//database conexión
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongo Connected"))
  .catch((err) => console.log("mongo not connected", err));

//Routes
app.use("/user", require("./routes/authRoutes"));
app.use("/services", require("./routes/serviceRoutes"));
app.use("/product", require("./routes/productRoutes"));
app.use('/wash', require('./routes/washRoutes'))
app.use('/subscription', require('./routes/subRoutes'))


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
