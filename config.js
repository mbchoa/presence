module.exports = {
    BACKEND_HOST: process.env.BACKEND_HOST || 4000,
    BACKEND_PORT: process.env.BACKEND_PORT || 3000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/presence',
    FRONTEND_HOST: process.env.FRONTEND_HOST || 'localhost',
    FRONTEND_PORT: process.env.FRONTEND_PORT || 8080,
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    SESSION_SECRET: process.env.SESSION_SECRET || 'cowgomoo',
}
