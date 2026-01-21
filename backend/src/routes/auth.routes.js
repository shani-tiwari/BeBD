const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth.controller");
const { authUser } = require("../middleware/auth.middleware");

router.post("/auth/login", loginUser);

router.post("/auth/signup", registerUser);

module.exports = router;
