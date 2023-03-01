module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
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
    })

    Users.associate = (models) => {

        Users.hasMany(models.FriendRequests, { onDelete: "cascade", foreignKey: 'sent_user' });
        Users.hasMany(models.FriendRequests, { onDelete: "cascade", foreignKey: 'received_user' })

    }

    return Users;
}
