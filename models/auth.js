const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/hng-bs2');

const User = sequelize.define('user', {
    userId: {
        type: DataTypes.UUID
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: DataTypes.STRING
});


module.exports = User;