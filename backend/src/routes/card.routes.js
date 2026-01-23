const express = require('express');
const router = express.Router();
const authUser = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');
const {createCard, viewCards, viewCardBySlug, updateCard, deleteCard} = require('../controller/card.controller');

// routes - create, view, update delete 
router.get("/view-cards"    , viewCards  );
router.get('/view-card/:id' , viewCardBySlug);

// admin powers
router.post("/admin/create-card"       , authUser, roleMiddleware(["admin"]), createCard );
router.put("/admin/update-card/:id"    , authUser, roleMiddleware(["admin"]), updateCard );
router.delete("/admin/delete-card/:id" , authUser, roleMiddleware(["admin"]), deleteCard );

module.exports = router;