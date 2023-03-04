const router = require("express").Router();

const { validateToken } = require("../middlewares/validateToken");
const { resetPassword, updatePassword, userDetails } = require("../controllers/user");

router.post("/reset/password", resetPassword);
router.post("/reset/update", updatePassword);

router.get("/:userId", userDetails);

module.exports = router;
