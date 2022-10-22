const { Users } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async (req, res, next) => {
    try {

        if (!req.user) throw new Error()

        const foundUser = await Users.findOne({ where: { userId: req.user.id } })
        if (foundUser) return res.status(200).json(foundUser);

        const { id, displayName, photos, provider } = req.user;

        const user = { userId: id, name: displayName, photo: (provider === "steam" ? photos[2].value : photos[0].value), provider }
        await Users.create(user)
        res.status(200).json(user);

    } catch (e) {
        res.status(404).send("Authentication Failed")
    }
}

const register = async (req, res, next) => {

    try {

        const { name, email, password } = req.body;

        const user = await Users.findOne({ where: { userId: email } })
        if (user) throw new Error("Email is already taken")

        const hashedPassword = bcrypt.hashSync(password, 10)

        // await Users.create({ name: name, email: email, password: hashedPassword })
        res.status(200).send("registration")

        // const token = jwt.sign({ name: name, email: email }, process.env.JWT_KEY)

    } catch (e) {
        console.log(e)
    }
}

module.exports = { login, register };