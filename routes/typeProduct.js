const Router = require("express");
const typeProductController = require("../controllers/typeProductController");
const router = new Router();



router.post("/", typeProductController.addTypeProduct)

router.get("/product", typeProductController.getAll)

router.delete("/")



module.exports = router
