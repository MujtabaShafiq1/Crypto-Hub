const { Users, Tokens } = require("../models")
const { createError } = require("../middlewares/Error")
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = asyncHandler(async (req, res, next) => {

    const user = await Users.findOne({ where: { userId: req.body.email } })
    if (!user) return next(createError(404, "User not found"))

    const { id, password, userId, name, photo } = user.dataValues

    const validPassword = await bcrypt.compare(req.body.password, password)
    if (!validPassword) return next(createError(400, "Incorrect Password"));

    const token = jwt.sign({ id, userId }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.status(200).json({ token, userId, name, photo })
})


const register = asyncHandler(async (req, res, next) => {

    jwt.verify(req.body.token, process.env.JWT_EMAIL_KEY)

    const user = await Tokens.findOne({ where: { token: req.body.token } })
    const { id, token, ...otherDetails } = user.dataValues

    await Tokens.destroy({ where: { userId: otherDetails.userId } })
    await Users.create(otherDetails)

    res.status(201).json("Success")
})

const socialLogin = asyncHandler(async (req, res, next) => {
      
        if (!req.user) return next(createError(404, "Authentication Failed"))
        
        const { id, displayName, username, photos } = req.user;
        const foundUser = await Users.findOne({ where: { userId: (req.user._json.email || username), uuid: req.user.id } })
        
        if (foundUser) {
            const { password, ...details } = foundUser.dataValues
            return res.status(200).json(details);
        }

        const user = { userId: (req.user._json.email || username), name: displayName, uuid: id ,photo: (photos[2]?.value || photos[0]?.value)}
        await Users.create(user)
        res.status(200).json(user);
})

module.exports = { login, register, socialLogin };