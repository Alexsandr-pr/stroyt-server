const Router = require("express");
const router = new Router();
const typeToolController = require("../controllers/typeToolController")


router.post("/", typeToolController.addTypeTool)

router.get("/all", typeToolController.getAll)
router.get("/bycategory", typeToolController.getAllByCategory)
router.delete("/", typeToolController.deleteTypeTool)



module.exports = router
