const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// admin controller - powers of admin
async function registerAdmin(req, res, next) {
  try {
    const {
      fullName: { firstName, lastName },
      email,
      password,
    } = req.body;

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) return res.status(400).json({ msg: "user already exist" });

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName: { firstName, lastName },
      email,
      password: hashPassword,
      role: "admin",
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
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function loginAdmin(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ msg: "invalid credentials" });

    if (user.role !== "admin")
      return res.status(400).json({ msg: "Not an admin" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ msg: "invalid credentials" });

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
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerAdmin,
  loginAdmin,
};
