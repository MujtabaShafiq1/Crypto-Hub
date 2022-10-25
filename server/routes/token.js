const router = require("express").Router();

const { tempUser } = require("../controllers/token");

router.post("/", tempUser)

module.exports = router