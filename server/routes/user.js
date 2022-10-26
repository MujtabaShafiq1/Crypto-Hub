const router = require("express").Router();

const { resetPassword } = require("../controllers/user")

router.post("/reset/password", resetPassword)

module.exports = router