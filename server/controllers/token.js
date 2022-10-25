const { Tokens, Users } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const tempUser = async (req, res, next) => {

    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await Users.findOne({ where: { userId: email } })
        if (user) return res.status(404).json({ message: "Email is already taken" })

        const verificationToken = jwt.sign({ name, email }, process.env.JWT_EMAIL_KEY, { expiresIn: "1d" });
        const tempUser = { name, email, password: hashedPassword, token: verificationToken }

        // add photo option later
        await Tokens.create(tempUser)
        res.status(200).send(tempUser)

    } catch (e) {
        res.status(500).json({ message: "Please try again later" })
    }
}

module.exports = { tempUser };