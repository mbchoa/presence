import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';

import { DB_URI, PORT, REDIS_URL, SESSION_SECRET } from './config';
import { UserModel } from './users';
import authMiddleware from './middleware/auth';

const app = express();

// connect to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);

// setup redis session store
const RedisStore = connectRedis(session);

// setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    store: new RedisStore({
        url: REDIS_URL,
        secure: process.env.NODE_ENV === 'production',
    }),
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
}));

// setup routes
app.post('/signup', authMiddleware, (req, res) => {
    const {
        email,
        password,
    } = req.body;

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

app.post('/login', authMiddleware, (req, res) => {
    const {
        email,
        password,
    } = req.body;

    if (req.session._id) {
        console.log('User is already logged in');
        console.log('Session user id at: ', req.session._id);
        return res.status(200).send();
    }
    
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
                if (!req.session._id) {
                    console.log('Create new session');
                    req.session._id = user._id;
                }
                
                console.log('Session.ID', req.session.id);

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
