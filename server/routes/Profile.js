const router = require("express").Router();

const { profileDetails } = require("../controllers/profile");

router.get("/:userId", profileDetails);

module.exports = router;
