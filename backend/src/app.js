const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const errorMiddleware = require("./middleware/error.middleware");
const passport = require("passport");
const { googleAuth } = require("./controller/auth.controller");

// Initialize Google strategy
googleAuth();

// middleware
app.use(
  cors({
    origin: [
      "https://bebd.vercel.app",
      "https://be-bd-be-better-developer-8cf31fgzz.vercel.app",
      "https://bebd-be-better-developer.vercel.app/"
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/v1", authRoutes);
app.use("/api/v1", projectRoutes);

app.use(errorMiddleware);

module.exports = app;
