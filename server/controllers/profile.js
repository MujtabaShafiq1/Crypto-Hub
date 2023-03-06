const { Users } = require("../models");
const asyncHandler = require("express-async-handler");

// user details for profile
const profileDetails = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const user = await Users.findOne({ where: { userId } });
    const { id, password, ...otherDetails } = user.dataValues;
    res.status(200).json(otherDetails);
});

module.exports = { profileDetails };
