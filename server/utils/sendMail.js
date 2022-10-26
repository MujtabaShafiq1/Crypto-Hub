const nodemailer = require("nodemailer")

const sendMail = async (email, subject, token) => {

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.CLIENT,
            service: process.env.SERVICE,
            port: Number(process.env.EMAL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: { user: process.env.USER, pass: process.env.PASS }
        })

        const text = ``

        await transporter.sendMail({
            from: process.env.USER, to: email,
            subject: subject,
            html: `Verify email by clicking on : <a href=${process.env.CLIENT_URL}confirmation/${token}>Click here</a> 
            <br>If you havent created an account dont click. <br>Regards , Localhost Team` ,
        })

        console.log("Email sent Successfully");
    } catch (e) {
        console.log(e)
        console.log("Email not sent");
    }
}

module.exports = { sendMail }