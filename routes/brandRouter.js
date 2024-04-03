const Router = require("express");
const brandController = require("../controllers/brandController")
const router = new Router();



router.post("/", brandController.addBrand);
router.get("/", brandController.getAllBrand);
router.delete("/", brandController.deleteBrand)

module.exports = router
