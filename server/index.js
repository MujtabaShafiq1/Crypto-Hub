const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")
const passport = require("passport");
require("dotenv").config()

const authRouter = require("./routes/auth")

const app = express();
app.use(express.json())

app.use(cookieSession({ name: "session", keys: [process.env.COOKIE_KEY], maxAge: 24 * 60 * 60 * 100, secure: false }));
app.use(cors({ origin: "http://localhost:3000", methods: "GET,POST,PUT,DELETE", credentials: true }));

app.use(passport.initialize());
app.use(passport.session());
require("./passport");

app.use("/auth", authRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`);
})