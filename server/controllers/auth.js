const login = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            // cookies: req.cookies
        });
    } catch (e) {
        res.status(404).send(e)
    }
}

module.exports = { login };