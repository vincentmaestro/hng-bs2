const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let user = await User.findOne({ where: { email: req.body.email } });
        const hashedPassword = await bcrypt.compare(req.body.password, user.password);

        const accessToken = jwt.sign('HNG_Stage2', user.userId);

        res.status(201).send({
            status: 'Success',
            message: 'Login successful',
            data: {
                accessToken: accessToken,
                user: {
                    userId: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone
                }
            }
        });
    }
    catch(ex) {
        res.status(401).send({
            status: 'Bad request',
            message: 'Authentication failed',
            statusCode: 401
        });
        console.log(ex.message);
    }
});

module.exports = router;