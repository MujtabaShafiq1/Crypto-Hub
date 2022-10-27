const router = require("express").Router();

const { resetPassword, updatePassword } = require("../controllers/user")

router.post("/reset/password", resetPassword)
router.post("/reset/update", updatePassword)

module.exports = router