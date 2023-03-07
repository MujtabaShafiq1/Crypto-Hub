module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.FriendRequests, { onDelete: "cascade", foreignKey: "senderUserId" });
        Users.hasMany(models.FriendRequests, { onDelete: "cascade", foreignKey: "receiverUserId" });
    };

    return Users;
};
