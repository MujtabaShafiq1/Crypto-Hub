const io = require("socket.io")(8900, { cors: { origin: "http://localhost:3000", credentials: true } });
const jwt = require("jsonwebtoken");
const cookieSession = require("cookie-session");
require("dotenv").config();

const users = new Map();

io.use((socket, next) => {
    const cookies = socket.handshake.headers.cookie.split("; ");
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
    // const decodedCookie = jwt.decode(sessionCookie, process.env.COOKIE_KEY, { algorithms: ['HS256'] });
    const decodedCookie = jwt.decode(sessionCookie, sessionSig, { algorithms: ['HS256'] });
    console.log(decodedCookie)

    // const cookieValue = "your_cookie_session_cookie_here";
    // const jwtToken = cookieValue.replace("s:", "").split(".")[0];

    // console.log(sessionCookie);
    // console.log(sessionSig);
    // const user = jwt.verify(sessionCookie, sessionSig);
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
