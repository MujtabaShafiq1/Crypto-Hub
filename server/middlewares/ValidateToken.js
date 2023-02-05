const { verify } = require("jsonwebtoken");
const { createError } = require("../middlewares/Error")

const validateToken = (req, res, next) => {

    const bearerToken = req.headers.authorization;
    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
        return next(createError(401, "Unauthorized"))
    }
    const token = bearerToken.split(' ')[1];

    try {
        const validToken = verify(token, process.env.JWT_KEY);
        req.user = validToken;
        if (validToken) return next();

    } catch (err) {
        return next(createError(400, err))
    }
};

module.exports = { validateToken };