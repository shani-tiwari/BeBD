const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth.controller");

// user authentication
router.post("/auth/signup", registerUser);
router.post("/auth/login", loginUser);

module.exports = router;
