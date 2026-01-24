const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth.controller");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// No need to import googleAuth here if it's called in app.js

// user authentication
router.post("/auth/signup", registerUser);
router.post("/auth/login", loginUser);

// OAuth
// OAuth
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set cookie as well for consistency with normal login
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
  },
);

module.exports = router;
