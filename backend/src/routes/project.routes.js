const express = require("express");
const router = express.Router();
const authUser = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const validateId = require("../middleware/validateId.middleware");
const {
  createProject,
  viewProjects,
  updateProject,
  deleteProject,
  likeProject,
  viewProjectById,
} = require("../controller/project.controller");
const imagekitAuth = require("../controller/image.controller");

// routes - create, view, update delete
router.get("/view-projects", viewProjects);
router.get("/view-project/:id", validateId, viewProjectById);
// router.get("/view-projects?category=", validateId, viewProjectById);
router.post("/view-project/:id/like", authUser, validateId, likeProject);


// imagekit
router.get("/auth/imagekit", authUser, imagekitAuth);


// admin powers
router.post(
  "/admin/create-project",
  authUser,
  roleMiddleware(["admin"]),
  createProject,
);
router.put(
  "/admin/update-project/:id",
  authUser,
  roleMiddleware(["admin"]),
  validateId,
  updateProject,
);
router.delete(
  "/admin/delete-project/:id",
  authUser,
  roleMiddleware(["admin"]),
  validateId,
  deleteProject,
);

module.exports = router;
