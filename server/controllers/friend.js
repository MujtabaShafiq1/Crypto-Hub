const { Users } = require("../models");
const asyncHandler = require("express-async-handler");

// user details for profile
const allFriends = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const friendList = await Friends.findAll({ where: { id: id } });
    res.status(200).json(friendList);
});

module.exports = { allFriends };
