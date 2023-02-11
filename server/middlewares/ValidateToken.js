const { createError } = require("../middlewares/Error");

const validateToken = (req, res, next) => {
    try {
        if (req.isAuthenticated()) return next();
        throw new Error();
    } catch (e) {
        next(createError(401, "Authentication Failed"));
    }
};

module.exports = { validateToken };
