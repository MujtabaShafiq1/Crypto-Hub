const { Users, FriendRequests } = require("../models");
const asyncHandler = require("express-async-handler");
const { encryptId, decryptId } = require("../utils/CryptoUtils");
const { Op, literal } = require("sequelize");

// user details for profile
const profileDetails = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const uid = decryptId(req.body.id);

    const user = await Users.findOne({ where: { userId } });

    if (user.id === uid) res.status(200).json(user);

    const request = await FriendRequests.findOne({
        attributes: ["id", [literal(`senderUserId = ${uid}`), "sender"], [literal(`receiverUserId = ${uid}`), "receiver"]],
    });

    const { id, password, ...otherDetails } = user.dataValues;
    res.status(200).json({ id: encryptId(id.toString()), ...otherDetails, request });
});

module.exports = { profileDetails };
