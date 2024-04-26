const Router = require("express");
const router = new Router();
const cardController = require("../controllers/cardController")


router.post("/", cardController.addCard)
router.get("/", cardController.getCard)
router.get("/:id", cardController.getOneCard)
router.delete("/card/:id", cardController.deleteCard)

module.exports = router
