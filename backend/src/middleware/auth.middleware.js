const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// identifies the user
async function authUser(req, res, next) {
  try {
    let token = req.cookies.token;

    if (
      !token &&
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token)
      return res.status(401).json({ msg: "unauthorized: no token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);

    if (!user)
      return res.status(401).json({ msg: "unauthorized: user not found" });

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ msg: "unauthorized: invalid token" });
  }
}

module.exports = authUser;
