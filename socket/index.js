const socketIo = require("socket.io");
const cookieSession = require("cookie-session");
require("dotenv").config();

// const options = { reconnection: true, reconnectionAttempts: 3 };
const io = socketIo(8900, { cors: { origin: "http://localhost:3000", credentials: true } });

const users = new Map();

io.use((socket, next) => {
    const sessionMiddleware = cookieSession({ name: "session", keys: [process.env.COOKIE_KEY], maxAge: 24 * 60 * 60 * 1000 });

    sessionMiddleware(socket.request, {}, () => {
        const session = socket.request.session;
        if (!session?.passport?.user?.id) return next(new Error("Invalid User"));
        users.set(socket.id, session.passport.user.id);
        next();
    });
});

io.on("connection", (socket) => {
    // when user connects to server
    console.log("New socket connection");
    console.log(users);

    // when user disconnects from server
    socket.on("disconnect", () => {
        users.delete(socket.id);
        console.log("User disconnection", socket.id);
        console.log(users);
        // socket.broadcast.emit("disconnectedUser", socket.id);
    });
});
