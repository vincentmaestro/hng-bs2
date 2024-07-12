const { DataTypes, Sequelize, UUIDV4 } = require('sequelize');
const Organization = require('./organization');


const sequelize = new Sequelize('edb_admin', 'edb_admin', process.env.db_password, {
    host: 'p-hfcgp9sz5e.pg.biganimal.io',
    port: 5432,
    dialect: 'postgres',
    ssl: true
  });

const User = sequelize.define('user', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
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

// User.hasMany(Organization);


module.exports = User;