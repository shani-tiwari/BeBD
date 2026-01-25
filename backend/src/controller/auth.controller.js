const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

async function registerUser(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName?.firstName || !email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) return res.status(400).json({ msg: "user already exist" });

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName: {
        firstName: fullName.firstName,
        lastName: fullName.lastName,
      },
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(201).json({
      msg: "ok",
      user: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ msg: "invalid credentials" });

    if (!user.password)
      return res
        .status(400)
        .json({ msg: "Please use Google login for this account" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ msg: "invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      msg: "okay",
      email: user.email,
      id: user._id,
      fullName: user.fullName,
    });
  } catch (error) {
    next(error);
  }
}

function googleAuth() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/v1/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Find/create user in DB
          const email = profile.emails[0].value;
          let user = await userModel.findOne({ email });
          if (!user) {
            const nameParts = profile.displayName.split(" ");
            user = await userModel.create({
              fullName: {
                firstName: nameParts[0] || "Google",
                lastName: nameParts.slice(1).join(" ") || "User",
              },
              email,
              googleId: profile.id,
              role: "user",
            });
          } else if (!user.googleId) {
            // Link googleId to existing account
            user.googleId = profile.id;
            await user.save();
          }
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
}

module.exports = {
  registerUser,
  loginUser,
  googleAuth,
};
