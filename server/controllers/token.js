const { Tokens, Users } = require("../models");
const { Op } = require("sequelize");
const { sendMail } = require("../utils/SendMail");
const { createError } = require("../middlewares/Error");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const tempUser = asyncHandler(async (req, res, next) => {
    try {

        const { name, email, password, file } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // deletes previous records where duration is greather than 10 minutes
        await Tokens.destroy({ where: { createdAt: { [Op.lt]: new Date(Date.now() - 60 * 5 * 10 * 1000) } } });
        
        const user = await Users.findOne({ where: { userId: email } });
        if (user) return next(createError(400, "Email is already taken"));
        
        const verificationToken = jwt.sign({ name, email }, process.env.JWT_EMAIL_KEY, { expiresIn: "10m" });
        const tempUser = { userId: email, name, password: hashedPassword, token: verificationToken, photo: file };
        
        await sendMail(req.body.email, verificationToken, "verification");
        
        await Tokens.create(tempUser);
        res.status(200).send(tempUser);
    } catch(e) {
        console.log(e)
    }
});

module.exports = { tempUser };
