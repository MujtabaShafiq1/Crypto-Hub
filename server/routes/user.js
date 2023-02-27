const router = require("express").Router();

const { resetPassword, updatePassword, userDetails } = require("../controllers/user");

router.post("/reset/password", resetPassword);
router.post("/reset/update", updatePassword);

router.get("/:id", userDetails)

module.exports = router;
