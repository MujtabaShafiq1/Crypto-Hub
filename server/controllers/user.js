const { Users } = require("../models")
const { sendMail } = require("../utils/sendMail")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const resetPassword = async (req, res, next) => {
    try {

        const user = await Users.findOne({ where: { userId: req.body.userId } })
        if (!user) return res.status(400).json({ message: "User doesnt exist" })

        if (user.provider !== "local") return res.status(401).json({ message: "Un-Authorized" })

        const verificationToken = jwt.sign({ userId: req.body.userId }, process.env.JWT_RESET_PASSWORD_KEY, { expiresIn: "5m" });
        await sendMail(req.body.userId, "Reset Password on localhost", verificationToken, "reset")
        res.status(200).json("Success")

    } catch (e) {
        res.status(500).json({ message: (e.message || "Please try again later") })
    }
}

const updatePassword = async (req, res, next) => {
    try {
        const decodedToken = jwt.verify(req.body.token, process.env.JWT_RESET_PASSWORD_KEY)

        const user = await Users.findOne({ where: { userId: decodedToken.userId } })
        const correctPass = bcrypt.compareSync(req.body.password, user.password);

        if (correctPass) return res.status(400).json({ message: "Cannot use previous password" })

        const newPassword = await bcrypt.hash(req.body.password, 10)
        await Users.update({ password: newPassword }, { where: { userId: decodedToken.userId } });
        res.status(200).json("Updated")

    } catch (e) {
        res.status(500).json({ message: (e.message || "Please try again later") })
    }
}

module.exports = { resetPassword, updatePassword }