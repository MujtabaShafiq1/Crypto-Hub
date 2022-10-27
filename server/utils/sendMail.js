const nodemailer = require("nodemailer")

const sendMail = async (email, subject, token, type) => {

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.CLIENT,
            service: process.env.SERVICE,
            port: Number(process.env.EMAL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: { user: process.env.USER, pass: process.env.PASS }
        })

        const verification = `Verify email by clicking on : <a href=${process.env.CLIENT_URL}confirmation/${token}>Click here</a> 
            <br>If you havent created an account dont click. <br>Regards , Localhost Team`

        const passwordReset = `Reset password by clicking on : <a href=${process.env.CLIENT_URL}reset/${token}>Click here</a> 
            <br>If you havent requested for password change <b>DONOT PROCEED</b><br>Regards , Localhost Team`

        await transporter.sendMail({
            from: process.env.USER, to: email,
            subject: subject,
            html: (type === "verification" ? verification : passwordReset),
        })

        console.log("Email sent Successfully");
    } catch (e) {
        console.log(e)
        console.log("Email not sent");
    }
}

module.exports = { sendMail }