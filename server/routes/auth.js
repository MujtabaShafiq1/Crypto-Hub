const router = require("express").Router();
const passport = require("passport");
const { login, register } = require("../controllers/auth");

const CLIENT_URL = "http://localhost:3000/";

router.post("/register", register);

router.get("/login/success", login);

router.get("/login/failed", (req, res) => {
    res.status(401).json({ success: false, message: "failure" });
});


router.get("/logout", (req, res) => {
    req.session = null
    req.logout();
    res.redirect(`${CLIENT_URL}login`);
});


router.post('/login', passport.authenticate("local", {
    successRedirect: "login/success",
    failureRedirect: "login/failed",
}))


router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
router.get("/github/callback", passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));


router.get("/steam", passport.authenticate("steam", { scope: ["profile"] }));
router.get("/steam/callback", passport.authenticate("steam", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));


module.exports = router