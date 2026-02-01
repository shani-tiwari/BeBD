const mongoose = require("mongoose");

async function connectToDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log("DB connection error:", error);
  }
}

module.exports = connectToDB;
