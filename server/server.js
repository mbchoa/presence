import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import redis from 'redis';

import { DB_URI, PORT, REDIS_PORT, SESSION_SECRET } from './config';
import { UserModel } from './users';
import authMiddleware from './middleware/auth';

const app = express();

// connect to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);

// create Redis session store
const RedisStore = connectRedis(session);
const redisSessionStore = new RedisStore({
    client: redis.createClient(),
    host: 'localhost',
    port: REDIS_PORT
});

// setup express middleware
app.use(cors({ 
    credentials: true,
    origin: 'http://localhost:8080',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    name: 'session-id',
    store: redisSessionStore,
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 86400000
    }
}));

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
                        successMsg: 'Created new user!'
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

                req.session.user_id = user._id;
                res.status(200).send({
                    successMsg: 'User logged in!',
                    userId: user._id
                });
            })
        })
});

app.get('/checkAuth', (req, res) => {
    redisSessionStore.get(req.session.id, (err, session) => {
        if (err) return res.status(400).send({
            result: { isAuthenticated: false }
        });

        if (session) return res.status(200).send({ 
            result: { isAuthenticated: true }
        });

        res.status(200).send({
            result: { isAuthenticated: false }
        });
    });
});

app.post('/logout', (req, res) => {
    redisSessionStore.destroy(req.session.id, err => {
        if (err) return res.status(400).send();
        res.status(200).send();
    });
});

app.listen(PORT, () => {
    console.log(`Started server listening on port ${ PORT }`);
});

export default app;
