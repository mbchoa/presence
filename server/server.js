import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import express from 'express';
import mongoose from 'mongoose';

import { DB_URI, PORT } from './config';
import { UserModel } from './users';

const app = express();

// connect to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);

// setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup routes
app.post('/signup', (req, res) => {
    const {
        email,
        password,
    } = req.body;

    if (!email) 
        return res.status(400).send({ 
            error: 'You must enter an e-mail address',
        });

    if (!password)
        return res.status(400).send({ 
            error: 'You must enter a password',
        });

    // validate new user
    UserModel
        .findOne({ email })
        .then(user => {
            if (user) 
                return res.status(400).send({ 
                    error: 'That email address is already in use',
                });

            const newUser = new UserModel({
                email,
                password,
            });

            newUser.save()
                .then(user => {
                    console.log('Created new user');
                    return res.status(200).send({
                        _id: user._id,
                        email: user.email,
                    });
                })
                .catch(err =>
                    res.status(400).send({
                        error: 'Error creating user',
                    })
                );
        });
});

app.post('/login', (req, res) => {
    const {
        email,
        password,
    } = req.body;

    if (!email) 
        return res.status(400).send({ 
            error: 'You must enter an e-mail address',
        });

    if (!password)
        return res.status(400).send({ 
            error: 'You must enter a password',
        });

    UserModel
        .findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    error: 'User does not exist. Please enter a valid username',
                });
            }

            user.comparePassword(password, (err, isMatch) => {
                if (err) return res.status(400).send({
                    error: 'Error validating password. Please try again',
                });

                // TODO:  add max retry attempts
                if (!isMatch) return res.status(400).send({
                    error: 'Invalid password, Please try again',
                });

                console.log('Logged in user');
                res.status(200).send({
                    _id: user._id,
                    email: user.email,
                });
            })
        })
});

app.listen(PORT, () => {
    console.log(`Started server listening on port ${ PORT }`);
});

export default app;
