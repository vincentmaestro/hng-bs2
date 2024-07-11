const { DataTypes, Sequelize, UUIDV4 } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/hng-bs2');

const Organization = sequelize.define('organization', {
    OrgId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.STRING
});


module.exports = Organization;