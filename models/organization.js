const { DataTypes, Sequelize, UUIDV4 } = require('sequelize');
const pg = require('pg');
const User = require('./user');

const sequelize = new Sequelize('edb_admin', 'edb_admin', process.env.db_password, {
    host: 'p-hfcgp9sz5e.pg.biganimal.io',
    port: 5432,
    dialect: 'postgres',
    dialectModule: pg,
    ssl: true
});

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

Organization.hasMany(User, {
    foreignKey: {
        type: DataTypes.UUID
    }
});
User.belongsTo(Organization);

