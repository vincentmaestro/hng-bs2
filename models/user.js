const { DataTypes, Sequelize, UUIDV4 } = require('sequelize');
const pg = require('pg');

// const sequelize = new Sequelize('edb_admin', 'edb_admin', process.env.db_password, {
//     host: 'p-hfcgp9sz5e.pg.biganimal.io',
//     port: 5432,
//     dialect: 'postgres',
//     dialectModule: pg,
//     ssl: true
//   });

  const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectModule: pg,
    ssl: true
  });

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
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

// sequelize.sync()
//     .then(() => console.log('models synchronized successfully'))
//     .catch(err => console.error('failed to synchronize'));

module.exports = User;