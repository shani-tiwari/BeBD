const express = require('express');
const router = express.Router();
const authUser = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');
const {createCard, viewCards, viewCardBySlug, updateCard, deleteCard, likeCard} = require('../controller/card.controller');
const imagekitAuth = require('../controller/image.controller');

// routes - create, view, update delete 
router.get("/view-cards"    , viewCards  );
router.get('/view-card/:id' , viewCardBySlug);
router.post('/view-card/:id/like' , likeCard);
router.get('/auth/imagekit', imagekitAuth);


// admin powers
router.post("/admin/create-card"       , authUser, roleMiddleware(["admin"]), createCard );
router.put("/admin/update-card/:id"    , authUser, roleMiddleware(["admin"]), updateCard );
router.delete("/admin/delete-card/:id" , authUser, roleMiddleware(["admin"]), deleteCard );

module.exports = router;