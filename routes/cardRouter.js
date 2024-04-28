const Router = require("express");
const router = new Router();
const cardController = require("../controllers/cardController")


router.post("/", cardController.addCard);
router.get("/cards", cardController.getCard);
router.get("/one/:id", cardController.getOneCard);
router.get("/category/hits", cardController.getArrayCardOnCategory);

router.delete("/card/:id", cardController.deleteCard)

module.exports = router
