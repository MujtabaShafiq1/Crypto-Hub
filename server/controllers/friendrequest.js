const { FriendRequests, Users } = require("../models");
const asyncHandler = require("express-async-handler");
const { decryptId } = require("../utils/CryptoUtils");

// send user the friend request
const addRequest = asyncHandler(async (req, res, next) => {
    const senderUserId = decryptId(req.body.sender);
    const receiverUserId = decryptId(req.body.receiver);
    const newRequest = await FriendRequests.create({ senderUserId, receiverUserId });
    res.status(201).json(newRequest.id);
});

// update password after email redirect
const deleteRequest = asyncHandler(async (req, res, next) => {
    const { id } = req.body
    await FriendRequests.destory(id);
    res.status(202).json("Friend Request Deleted");
});

// get all friend request receive by the user
const receivedRequests = asyncHandler(async (req, res, next) => {
    const decryptedId = decryptId(req.body.id);
    const friendRequests = await FriendRequests.findAll({
        where: { receiverUserId: decryptedId },
        include: [{ model: Users, as: "sender", attributes: ["name", "photo"] }],
    });
    res.status(200).json(friendRequests);
});

// get all friend request sent by the user
const sentRequests = asyncHandler(async (req, res, next) => {
    const decryptedId = decryptId(req.body.id);
    const friendRequests = await FriendRequests.findAll({
        where: { senderUserId: decryptedId },
        include: [{ model: Users, as: "receiver", attributes: ["name", "photo"] }],
    });
    res.status(200).json(friendRequests);
});

module.exports = { addRequest, deleteRequest, receivedRequests, sentRequests };
