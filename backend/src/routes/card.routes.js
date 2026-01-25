const express = require("express");
const router = express.Router();
const authUser = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const validateId = require("../middleware/validateId.middleware");
const {
  createCard,
  viewCards,
  updateCard,
  deleteCard,
  likeCard,
  viewCardById,
} = require("../controller/card.controller");
const imagekitAuth = require("../controller/image.controller");

// routes - create, view, update delete
router.get("/view-cards", viewCards);
router.get("/view-card/:id", validateId, viewCardById);
router.post("/view-card/:id/like", authUser, validateId, likeCard);

router.get("/auth/imagekit", authUser, imagekitAuth);

// admin powers
router.post(
  "/admin/create-card",
  authUser,
  roleMiddleware(["admin"]),
  createCard,
);
router.put(
  "/admin/update-card/:id",
  authUser,
  roleMiddleware(["admin"]),
  validateId,
  updateCard,
);
router.delete(
  "/admin/delete-card/:id",
  authUser,
  roleMiddleware(["admin"]),
  validateId,
  deleteCard,
);

module.exports = router;
