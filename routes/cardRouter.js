const Router = require("express");
const router = new Router();
const cardController = require("../controllers/cardController")


router.post("/", cardController.addCard)


router.get("/", (req, res) => {
    return res.json({message: "ALL WORKING"})
})



module.exports = router
