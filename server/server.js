import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import express from 'express';
import mongoose from 'mongoose';

import { DB_URI, PORT } from './config';

const app = express();

// connect to mongodb database
mongoose.connect(DB_URI);

// setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));

// setup routes
app.post('/signup', function() {});

app.post('/login', function() {})

app.listen(PORT, () => {
    console.log(`Started server listening on port ${ PORT }`);
});

export default app;
