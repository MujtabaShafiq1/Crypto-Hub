const jwt = require("jsonwebtoken");

const PassportStorageToken = (req, res, next) => {
    if (req.isAuthenticated()) {
        localStorage.setItem('user', JSON.stringify(req.user));
    }
    next();
}

module.exports = { PassportStorageToken };
