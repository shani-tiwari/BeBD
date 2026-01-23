const express = require('express');
const router = express.Router();
const authUser = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');
const {createCard, viewCards, updateCard, deleteCard} = require('../controller/card.controller');

// routes - create, view, update delete 
// router.post("/admin/create-card"   , authUser, roleMiddleware(["admin"]), createCard );
// router.get("/admin/view-cards"     , authUser, roleMiddleware(["admin"]), viewCards  );
// router.put("/admin/update-card/:id", authUser, roleMiddleware(["admin"]), updateCard );
// router.delete("/admin/delete-card" , authUser, roleMiddleware(["admin"]), deleteCard );

module.exports = router;