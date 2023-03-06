const { FriendRequests, Users } = require("../models");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto-js");

// update password and cofirmation on email
const addRequest = asyncHandler(async (req, res, next) => {
    const { sender, receiver } = req.body;
    const newRequest = { senderUserId: sender, receiverUserId: receiver };
    await FriendRequests.create(newRequest);
    res.status(201).json("Friend Request Sent");
});

// update password after email redirect
const deleteRequest = asyncHandler(async (req, res, next) => {
    const { requestId } = req.params;
    // await FriendRequests.destory(id);
    res.status(201).json("Friend Request Deleted");
});

// get all friend request receive by the user
const receivedRequests = asyncHandler(async (req, res, next) => {
    const decryptedId = crypto.AES.decrypt(req.body.id, process.env.CRYPTO_KEY).toString(crypto.enc.Utf8);
    const user = await FriendRequests.findAll({ where: { receiverUserId: decryptedId }, include: [Users] });
    res.status(200).json(user.dataValues);
});

// get all friend request sent by the user
const sentRequests = asyncHandler(async (req, res, next) => {
    const decryptedId = crypto.AES.decrypt(req.body.id, process.env.CRYPTO_KEY).toString(crypto.enc.Utf8);
    const user = await FriendRequests.findAll({ where: { senderUserId: decryptedId }, include: [Users] });
    res.status(200).json(user.dataValues);
});

module.exports = { addRequest, deleteRequest, receivedRequests, sentRequests };
