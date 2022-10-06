const {Router} = require("express")
const imgResize = require("../controller/imgResize")
const router =Router()

router.post("/img",imgResize.resize)

module.exports = router