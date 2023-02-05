const { Users, Tokens } = require("../models")
const { createError } = require("../middlewares/error")
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = asyncHandler(async (req, res, next) => {

    const user = await Users.findOne({ where: { userId: req.body.email } })
    if (!user) return next(createError(404, "User not found"))

    const { password, userId, name, photo } = user.dataValues

    const validPassword = await bcrypt.compare(req.body.password, password)
    if (!validPassword) return next(createError(400, "Incorrect Password"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.status(200).json({ token, userId, name, photo })
})

const register = asyncHandler(async (req, res, next) => {
    try {

        jwt.verify(req.body.token, process.env.JWT_EMAIL_KEY)

        const user = await Tokens.findOne({ where: { token: req.body.token } })
        const { id, token, ...otherDetails } = user.dataValues

        await Tokens.destroy({ where: { userId: otherDetails.userId } })
        await Users.create(otherDetails)

        res.status(201).json("Success")

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: (e.message || "Please try again later") })
    }
})


const socialLogin = asyncHandler(async (req, res, next) => {
    try {

        if (!req.user) return res.status(404).json({ message: "Authentication Failed" })

        if (req.user.provider === "local") return res.status(200).json(req.user);

        const foundUser = await Users.findOne({ where: { userId: (req.user._json.email || req.user.id) } })

        if (foundUser) {
            const { password, ...details } = foundUser.dataValues
            return res.status(200).json(details);
        }

        const { id, displayName, photos, provider } = req.user;
        const user = { userId: (req.user._json.email || id), name: displayName, photo: (provider === "steam" ? photos[2].value : photos[0].value), provider }
        await Users.create(user)
        res.status(200).json(user);

    } catch (e) {
        res.status(500).json({ message: "Please try again later" })
    }
})

module.exports = { login, register, socialLogin };