const { Users, Tokens } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async (req, res, next) => {
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
}

const register = async (req, res, next) => {
    try {

        const decoded = jwt.verify(req.body.token, process.env.JWT_EMAIL_KEY)
        console.log(decoded)

        const user = await Tokens.findOne({ where: { token: req.body.token } })
        const { id, token, ...otherDetails } = user.dataValues
        // await Users.create(otherDetails)
        res.status(201).json(user)
        // res.status(201).json("Success")

    } catch (e) {
        res.status(500).json({ message: (e.message || "Please try again later") })
    }
}


module.exports = { login, register };