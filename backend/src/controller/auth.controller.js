const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName?.firstName || !fullName?.lastName || !email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) 
      return res.status(400).json({ msg: "user already exist" });

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName: { firstName, lastName },
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
    if (!user) 
      return res.status(400).json({ msg: "invalid credentials" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) 
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
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
};
