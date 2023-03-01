const io = require("socket.io")(8900, { cors: { origin: "http://localhost:3000", credentials: true } });
const jwt = require("jsonwebtoken");
require("dotenv").config();

const users = new Map();

io.use((socket, next) => {
    const cookies = socket.handshake.headers.cookie.split("; ");
    console.log(cookies)
    let sessionCookie;
    let sessionSig;
    for (const cookie of cookies) {
        if (cookie.startsWith("session=")) {
            sessionCookie = cookie.split("session=")[1];
        }
        if (cookie.startsWith("session.sig=")) {
            sessionSig = cookie.split("session.sig=")[1];
        }
    }
    // const token = cookie.split(";")[0];
    // const key = cookie.split(";")[1].split("=")[1];
    // console.log(token, key);
    console.log(sessionCookie, sessionSig);
    const user = jwt.verify(sessionCookie, "xyzsession123")
    // const user = jwt.verify(token, process.env.JWT_KEY);
    // if (!user.id) return next(new Error("Invalid User"));
    // users.set(userId, socket.id);
    // socket.userId = user.id;
    // next();
});

io.on("connection", (socket) => {
    users.set(userId, socket.id);
    console.log(users);

    // when user disconnects from server
    socket.on("disconnect", () => {
        users.delete(socket.id);
        socket.broadcast.emit("disconnectedUser", socket.userId);
    });
});
