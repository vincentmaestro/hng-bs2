// require('express-async-errors');
// const { Sequelize } = require('sequelize');
const express = require('express');
const user = require('../routes/user');
const auth = require('../routes/auth');

// process.on('unhandledRejection', ex => console.log(ex.message));
// process.on('uncaughtException', ex => console.log(ex.message));


const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app started on port ' + port));

// sequelize.authenticate()
//     .then(() => console.log('Connection has been established successfully.'))
//     .catch(err => console.error(err.message));


app.use(express.json());
app.use('/auth/register', user);
app.use('/auth/login', auth);


module.exports = app;
    