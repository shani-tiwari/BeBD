const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes");
const cardRoutes = require("./routes/card.routes");
const errorMiddleware = require("./middleware/error.middleware");
const passport = require("passport");
const { googleAuth } = require("./controller/auth.controller");



// Initialize Google strategy
googleAuth();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/v1", authRoutes);
app.use("/api/v1", cardRoutes);

app.use(errorMiddleware);



module.exports = app;
