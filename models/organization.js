const { DataTypes, Sequelize, UUIDV4 } = require('sequelize');
const pg = require('pg');
const User = require('./user');

// const sequelize = new Sequelize('edb_admin', 'edb_admin', process.env.db_password, {
//     host: 'p-hfcgp9sz5e.pg.biganimal.io',
//     port: 5432,
//     dialect: 'postgres',
//     dialectModule: pg,
//     ssl: true
// });

const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectModule: pg,
    ssl: true
  });

  sequelize.authenticate()
    .then(() => console.log('<<<<< -- connected to postgres -- >>>>>'))
    .catch(err => console.log(err.message));

const Organization = sequelize.define('organization', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.STRING
});

Organization.hasMany(User, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false
    }
});
User.belongsTo(Organization);

module.exports = Organization;