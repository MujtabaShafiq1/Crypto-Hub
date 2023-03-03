const io = require("socket.io")(8900, {
    cors: { origin: "http://localhost:3000", credentials: true },
});

const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const users = new Map();

// Set up cookie-parser middleware
io.use((socket, next) => {
    const sessionMiddleware = cookieSession({
        name: "session",
        keys: [process.env.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    sessionMiddleware(socket.request, {}, () => {
        const session = socket.request.session;
        if (!session?.passport?.user?.id) return next(new Error("Invalid User"))
        next();
    });
});

io.on("connection", (socket) => {
    // when user connects to server
    const id = socket.request.session.passport.user.id;
    console.log("New socket connection", id);

    // when user disconnects from server
    socket.on("disconnect", () => {
        // users.delete(socket.id);
        console.log("User disconnection");
        // socket.broadcast.emit("disconnectedUser", socket.id);
    });
});
