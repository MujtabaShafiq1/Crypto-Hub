const { Users } = require("../models")

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
    res.status(200).send("registration")
}

module.exports = { login, register };