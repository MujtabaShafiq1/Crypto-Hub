const router = require("express").Router();

const { validateToken } = require("../middlewares/validateToken");
const { allFriends} = require("../controllers/friend");

router.get("/:id", validateToken,allFriends);

module.exports = router;
