const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("dotenv").config();

const { errorMiddleware } = require("./middlewares/Error");

const db = require("./models");

const authRouter = require("./routes/auth");
const tokenRouter = require("./routes/token");
const userRouter = require("./routes/user");

// express
const app = express();
app.use(express.json());

// session creation
app.use(
    cookieSession({
        name: "session",
        keys: [process.env.COOKIE_KEY],
        secret: process.env.COOKIE_KEY,
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    })
);

// cross origin
app.use(cors({ origin: "http://localhost:3000", methods: "GET,POST,PUT,DELETE", credentials: true }));

// passport session
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

// routes
app.use("/auth", authRouter);
app.use("/token", tokenRouter);
app.use("/user", userRouter);

//middleware for error
app.use(errorMiddleware);

// Server Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
    console.log(`Listening to PORT: ${PORT}`);
    await db.sequelize.sync();
    console.log("Database Synced");
});
