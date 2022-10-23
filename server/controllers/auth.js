const { Users } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async (req, res, next) => {
    try {

        if (!req.user) throw new Error()

        if (req.user.provider === "local") return res.status(200).json(req.user);

        const foundUser = await Users.findOne({ where: { userId: req.user.id } })
        if (foundUser) {
            const { password, ...details } = foundUser.dataValues
            return res.status(200).json(details);
        }

        const { id, displayName, photos, provider } = req.user;
        const user = { userId: id, name: displayName, photo: (provider === "steam" ? photos[2].value : photos[0].value), provider }
        await Users.create(user)
        res.status(200).json(user);

    } catch (e) {
        console.log(e)
        res.status(404).json({ message: "Authentication Failed" })
    }
}

const register = async (req, res, next) => {

    try {
        const { name, email, password } = req.body;
        const user = await Users.findOne({ where: { userId: email } })
        if (user) throw new Error("Email is already taken")

        const hashedPassword = await bcrypt.hash(password, 10)
        await Users.create({ userId: email, name: name, password: hashedPassword })
        res.status(200).send("registered")

    } catch (e) {
        // console.log(e);
        res.status(404).json({ message: "Email is already taken" })
    }
}

module.exports = { login, register };