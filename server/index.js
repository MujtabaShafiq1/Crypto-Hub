const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")
const passport = require("passport");
const db = require('./models')
const { errorMiddleware } = require("./middlewares/Error")
require("dotenv").config()

const authRouter = require("./routes/auth")
const tokenRouter = require("./routes/token")
const userRouter = require("./routes/user");

// express
const app = express();
app.use(express.json())

// session creation
app.use(cookieSession({ name: "session", keys: [process.env.COOKIE_KEY], maxAge: 24 * 60 * 60 * 100, secure: false }));

// cross origin
app.use(cors({ origin: "http://localhost:3000", methods: "GET,POST,PUT,DELETE", credentials: true }));

// passport session
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

// routes
app.use("/auth", authRouter)
app.use("/token", tokenRouter)
app.use("/user", userRouter)

//middleware for error
app.use(errorMiddleware)

// Server Port
const PORT = process.env.PORT || 3001
app.listen(PORT, async () => {
    console.log(`Listening to PORT: ${PORT}`);
    await db.sequelize.sync()
    console.log("Database Synced");
})