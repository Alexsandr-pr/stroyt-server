const Router = require("express");
const router = new Router();

const cardRouter = require("./cardRouter")
const caregoryRouter = require("./caregoryRouter")
const typeProduct = require("./typeProductRouter")
const typeToolRouter = require("./typeToolRouter")
const brandRouter = require("./brandRouter")



router.use("/card", cardRouter)
router.use("/category", caregoryRouter)
router.use("/typeproduct", typeProduct)
router.use("/typetool", typeToolRouter)
router.use("/brand", brandRouter)


module.exports = router
