const DB_URI = 'mongodb://localhost:27017';
const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const SESSION_SECRET = process.env.SESSION_SECRET || 'cowgomoo';

export {
    DB_URI,
    PORT,
    REDIS_PORT,
    SESSION_SECRET,
}
