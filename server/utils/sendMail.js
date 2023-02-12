const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");

const sendMail = asyncHandler(async (email, token, type) => {
    const transporter = nodemailer.createTransport({
        host: process.env.CLIENT,
        service: process.env.SERVICE,
        port: Number(process.env.EMAL_PORT),
        secure: Boolean(process.env.SECURE),
        auth: { user: process.env.USER, pass: process.env.PASS },
    });

    const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../emails", `${type}.hbs`), "utf8");
    const emailTemplate = handlebars.compile(emailTemplateSource);
    const html = emailTemplate({ url: process.env.CLIENT_URL, token: token });

    await transporter.sendMail({
        from: process.env.USER,
        to: email,
        subject: ("verification" ? "Verify Email on LocalHost" : "Update Password on LocalHost"),
        html: html,
    });

    console.log("Email sent Successfully");
});

module.exports = { sendMail };
