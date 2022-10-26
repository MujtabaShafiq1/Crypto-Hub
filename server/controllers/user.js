const { Users } = require("../models")

const resetPassword = async (req, res, next) => {
    try {
        res.status(200).json(req.body)
    } catch (e) {
        res.status(500).json("Server error")
    }

}

module.exports = { resetPassword }