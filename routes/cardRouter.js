const Router = require("express");
const router = new Router();



router.post("/")


router.get("/login", (req, res) => {
    return res.json({message: "ALL WORKING"})
})



module.exports = router