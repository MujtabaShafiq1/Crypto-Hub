const router = require("express").Router();

const { profileDetails } = require("../controllers/profile");

router.post("/:userId", profileDetails);

module.exports = router;
