module.exports = (sequelize, DataTypes) => {
    const FriendRequests = sequelize.define("FriendRequests", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    });

    FriendRequests.associate = (models) => {
        FriendRequests.belongsTo(models.Users, { foreignKey: "senderUserId", as: "sender" });
        FriendRequests.belongsTo(models.Users, { foreignKey: "receiverUserId", as: "receiver" });
    };

    return FriendRequests;
};