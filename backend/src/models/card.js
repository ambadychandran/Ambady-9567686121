module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "creditCards",
        {
            cardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            cardNumber: {
                type: DataTypes.INTEGER,
                allowNull: true,
                unique: true,
            },
            limit: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            balance: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: "creditCards",
        }
    );
};