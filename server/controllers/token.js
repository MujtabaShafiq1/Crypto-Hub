const { Tokens, Users } = require("../models")
const { Op } = require('sequelize');
const { sendMail } = require("../utils/sendMail")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const tempUser = async (req, res, next) => {

    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)

        // await Tokens.Destroy({ where: { createdAt: { [Op.lt]: new Date(Date.now() - (60 * 60 * 24 * 1000)) } } });   //expire in 24 hrs
        await Tokens.destroy({ where: { createdAt: { [Op.lt]: new Date(Date.now() - (60 * 10 * 1000)) } } });      // expires in 10 minutes

        const user = await Users.findOne({ where: { userId: email } })
        if (user) return res.status(404).json({ message: "Email is already taken" })

        const verificationToken = jwt.sign({ name, email }, process.env.JWT_EMAIL_KEY, { expiresIn: "1d" });
        const tempUser = { userId: email, name, password: hashedPassword, token: verificationToken }

        await sendMail(req.body.email, "Verify Email on localhost", verificationToken)

        // add photo option later
        await Tokens.create(tempUser)
        res.status(200).send(tempUser)

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Please try again later" })
    }
}

module.exports = { tempUser };