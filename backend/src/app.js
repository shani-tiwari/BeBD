const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes");
// const adminRoutes = require("./routes/admin.routes");
const cardRoutes = require("./routes/card.routes");
const errorMiddleware = require("./middleware/error.middleware");

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", authRoutes); 
// app.use("/api/v1", adminRoutes);
app.use("/api/v1", cardRoutes);


app.use(errorMiddleware);

module.exports = app;
