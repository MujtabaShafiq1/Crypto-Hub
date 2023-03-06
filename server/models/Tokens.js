module.exports = (sequelize, DataTypes) => {
    const Tokens = sequelize.define("Tokens", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        token: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    });

    return Tokens;
};
