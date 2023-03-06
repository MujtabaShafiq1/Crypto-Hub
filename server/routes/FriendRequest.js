const router = require("express").Router();

const { validateToken } = require("../middlewares/validateToken");
const { addRequest, deleteRequest, receivedRequests, sentRequests } = require("../controllers/friendrequest");

router.post("/add", validateToken, addRequest);
router.delete("/delete", validateToken, deleteRequest);
router.post("/received", validateToken, receivedRequests);
router.post("/sent", validateToken, sentRequests);

module.exports = router;
