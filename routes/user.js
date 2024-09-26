const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Organization = require('../models/organization');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const organization = await Organization.create({
            name: 'United Nations',
            description: 'World peace'
        });

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            organizationId: organization.id
        });

        const accessToken = jwt.sign('HNG_Stage2', user.id);

        res.status(201).send({
            status: 'Success',
            message: 'Registration successful',
            data: {
                accessToken: accessToken,
                user: {
                    id: user.userid,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    organizationId: organization.organizationId
                }
            }
        });
    }
    catch(ex) {
        // const ers = ex.errors.map(error => {
        //     const field = error.path;
        //     const message = error.message;
        //     return { field, message };
        // });
        // res.status(422).send({errors: ers});
        console.log(ex.message);
    }
});

module.exports = router;