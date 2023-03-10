const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("dotenv").config();

const logger = require("./middlewares/Logger");
const { errorMiddleware } = require("./middlewares/Error");

const db = require("./models");

const authRouter = require("./routes/Auth");
const tokenRouter = require("./routes/Token");
const userRouter = require("./routes/User");
const profileRouter = require("./routes/Profile");
const friendRouter = require("./routes/Friend");
const friendRequestRouter = require("./routes/FriendRequest");

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
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/token", tokenRouter);
app.use("/profile", profileRouter);
app.use("/friends", friendRouter);
app.use("/friendRequests", friendRequestRouter);

//middleware for error
app.use(errorMiddleware);

// Server Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
    logger.info(`Server is listening on port ${PORT}`);
    console.log(`Server is listening on port ${PORT}`);
    await db.sequelize.sync();
    console.log("Database Synced");
});
