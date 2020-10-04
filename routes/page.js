const express = require("express")
const pageController = require("../controllers/page")
const middleware = require("../utils/middleware")
const router = express.Router()

router.get("/", middleware.isAuth, pageController.dashboard)
router.get("/login", pageController.login)
router.get("/register", pageController.register)

module.exports = router