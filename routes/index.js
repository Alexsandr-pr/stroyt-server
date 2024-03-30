const Router = require("express");
const router = new Router();

const cardRouter = require("./cardRouter")
const caregoryRouter = require("./caregoryRouter")
const typeProduct = require("./typeProduct")
const typeToolRouter = require("./typeToolRouter")




router.use("/auth", cardRouter)
router.use("/category", caregoryRouter)
router.use("/typeproduct", typeProduct)
router.use("/typetool", typeToolRouter)



module.exports = router
