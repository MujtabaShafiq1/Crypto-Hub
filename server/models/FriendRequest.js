module.exports = (sequelize, DataTypes) => {

    const FriendRequests = sequelize.define("FriendRequests")
    return FriendRequests;
}