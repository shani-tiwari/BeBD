const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth.controller");
const { registerAdmin, loginAdmin } = require("../controller/admin.controller");
const authUser = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

// user authentication
router.post("/auth/signup", registerUser);
router.post("/auth/login", loginUser);

// admin authentication
router.post("/auth/admin/signup", registerAdmin);
router.post("/auth/admin/login", authUser, roleMiddleware(["admin"]), loginAdmin);

module.exports = router;
