const { verify } = require("jsonwebtoken");
const { createError } = require("../middlewares/Error")

const validateToken = (req, res, next) => {

    // console.log(req)

    try {
        const validToken = verify(token, process.env.JWT_KEY);
        req.user = validToken;
        if (validToken) return next();

    } catch (err) {
        return next(createError(400, err))
    }
};

module.exports = { validateToken };