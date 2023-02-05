const router = require("express").Router();

const { getMyDetails, resetPassword, updatePassword } = require("../controllers/user");
const { validateToken } = require("../middlewares/ValidateToken");

router.get("/me", validateToken, getMyDetails)
router.post("/reset/password", validateToken, resetPassword)
router.post("/reset/update", updatePassword)

module.exports = router