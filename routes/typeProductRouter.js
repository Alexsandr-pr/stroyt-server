const Router = require("express");
const typeProductController = require("../controllers/typeProductController");
const router = new Router();



router.post("/", typeProductController.addTypeProduct)

router.get("/product/all", typeProductController.getAll)
router.get("/product/bycategory", typeProductController.getAllByCategory)
router.delete("/product", typeProductController.deleteType)



module.exports = router
