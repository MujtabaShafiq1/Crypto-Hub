const login = (req, res, next) => {
    try {
        const { id, displayName, photos, provider } = req.user;
        const user = { id, name: displayName, photos, provider }
        res.status(200).json(user);
    } catch (e) {
        res.status(404).send("Authentication Failed")
    }
}

module.exports = { login };