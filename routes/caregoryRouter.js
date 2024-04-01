const Router = require("express");
const categoryController = require("../controllers/categoryController")
const router = new Router();



router.post("/", categoryController.addCategory);
router.get("/all", categoryController.getAll);


module.exports = router
