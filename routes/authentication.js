const express = require("express")
const controllers = require("../controllers/authenticationController")

const router = express.Router();

router.post('/signup', controllers.signupController)
router.post('/login', controllers.loginController)


module.exports = router;