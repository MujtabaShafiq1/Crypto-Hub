const router = require("express").Router();

const { resetPassword, updatePassword } = require("../controllers/user");
const { validateToken } = require("../middlewares/ValidateToken");

router.post("/reset/password", resetPassword);
router.post("/reset/update", updatePassword);

module.exports = router;
