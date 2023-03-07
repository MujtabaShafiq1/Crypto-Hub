const { Users } = require("../models");
const { sendMail } = require("../utils/SendMail");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// update password and cofirmation on email
const resetPassword = asyncHandler(async (req, res, next) => {
    const user = await Users.findOne({ where: { userId: req.body.userId } });
    if (!user) return res.status(400).json({ message: "User doesnt exist" });

    const verificationToken = jwt.sign({ userId: req.body.userId }, process.env.JWT_RESET_PASSWORD_KEY, { expiresIn: "5m" });
    sendMail(req.body.userId, verificationToken, "passwordReset", "Update Password on LocalHost");
    res.status(202).json("Success");
});

// update password after email redirect
const updatePassword = asyncHandler(async (req, res, next) => {
    const decodedToken = jwt.verify(req.body.token, process.env.JWT_RESET_PASSWORD_KEY);

    const user = await Users.findOne({ where: { userId: decodedToken.userId } });
    const correctPass = bcrypt.compareSync(req.body.password, user.password);

    if (correctPass) return res.status(400).json({ message: "Cannot use previous password" });

    const newPassword = await bcrypt.hash(req.body.password, 10);
    await Users.update({ password: newPassword }, { where: { userId: decodedToken.userId } });
    res.status(202).json("Updated");
});

module.exports = { resetPassword, updatePassword };
