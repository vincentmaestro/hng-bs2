const express = require('express');
const user = require('../routes/user');
const auth = require('../routes/auth');

const app = express();
const db_password = 'jjkskuuosukgfu';

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app started on port ' + port));


app.use(express.json());
app.use('/auth/register', user);
app.use('/auth/login', auth);


module.exports = app;
    