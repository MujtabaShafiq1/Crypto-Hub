const { Users, FriendRequests } = require("../models");
const asyncHandler = require("express-async-handler");
const { encryptId, decryptId } = require("../utils/CryptoUtils");
const { Op } = require("sequelize");

// user details for profile
const profileDetails = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const uid = decryptId(req.body.id);

    const user = await Users.findOne({ where: { userId } });
    const request = await FriendRequests.findOne({
        where: {
            [Op.or]: [
                { senderUserId: user.id, receiverUserId: uid },
                { senderUserId: uid, receiverUserId: user.id },
            ],
        },
    });

    const { id, password, ...otherDetails } = user.dataValues;
    res.status(200).json({ id: encryptId(id.toString()), ...otherDetails, request });
});

module.exports = { profileDetails };
