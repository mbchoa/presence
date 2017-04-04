const DB_URI = 'mongodb://localhost:27017';
const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 6379;
const SESSION_SECRET = process.env.SESSION_SECRET || 'cowgomoo';

export {
    DB_URI,
    PORT,
    REDIS_URL,
    SESSION_SECRET,
}
