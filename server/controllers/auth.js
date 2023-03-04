const { Users, Tokens } = require("../models");
const { createError } = require("../middlewares/Error");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// login locally

const login = asyncHandler(async (req, res, next) => {
    const user = await Users.findOne({ where: { userId: req.body.email } });
    if (!user) return next(createError(404, "User not found"));

    const { password, userId, name, photo } = user.dataValues;

    const validPassword = await bcrypt.compare(req.body.password, password);
    if (!validPassword) return next(createError(400, "Incorrect Password"));

    req.session.passport = { user: { id: userId } };
    res.status(200).json({ userId, name, photo });
});

// register locally

const register = asyncHandler(async (req, res, next) => {
    jwt.verify(req.body.token, process.env.JWT_EMAIL_KEY);

    const user = await Tokens.findOne({ where: { token: req.body.token } });
    const { id, token, ...otherDetails } = user.dataValues;

    await Tokens.destroy({ where: { userId: otherDetails.userId } });
    await Users.create(otherDetails);

    res.status(201).json("Success");
});

// login with passport.js

const socialLogin = asyncHandler(async (req, res, next) => {
    const { user } = req.session.passport;

    if (!user) throw createError(204, "Token not present");

    const { id, displayName, photos } = user;
    const foundUser = await Users.findOne({ where: { userId: id } });
    req.session.passport = { user: { id } };

    if (foundUser) {
        const { userId, name, photo } = foundUser.dataValues;
        return res.status(200).json({ userId, name, photo });
    }

    const newUser = { userId: id, name: displayName, photo: photos[2]?.value || photos[0]?.value };
    await Users.create(newUser);
    res.status(200).json(newUser);
});

module.exports = { login, register, socialLogin };
