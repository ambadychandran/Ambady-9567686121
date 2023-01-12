const router = require("express").Router();
const cardsController = require("../controllers/cards.controller");

// route to get all credit cards
router.get("/GetAll", cardsController.getCards);
// route to add credit card information
router.post("/Add", cardsController.addCard);

module.exports = {
    path: "/",
    handler: router,
};