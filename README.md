> # pres·ence [![Build Status](https://travis-ci.org/mbchoa/presence.svg?branch=master)](https://travis-ci.org/mbchoa/presence)
> ## /ˈprezəns/
> *noun*
>
> &nbsp;&nbsp;&nbsp;&nbsp;the state or fact of existing, occurring, or being present in a place or thing.

## Requirements

- [Nodejs](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/engine/installation/)
- [MongoDB](https://www.mongodb.com/download-center#community)
- [Redis](https://redis.io/download)

## Directory Structure
```
.
├── /client/                    # Client-side package
│   ├── /api/                   # API model class definitions
│   ├── /dist/                  # Client-side production build output folder
│   └── /src/                   # View source code
│       ├── /components/        # Top-level React component package
│       │   ├── /pages/         # Page-level route-associated components
│       │   └── ...             # Shared React components
│       ├── /helpers/           # Functional helpers
│       ├── /redux/             # Redux logic
│       ├── /themes/             # Themes folder
│       ├── /utils/             # Class helpers
│       ├── app.js              # React root component
│       ├── index.js            # Client-side startup script
│       └── styles.css          # Global styles
├── /server/                    # Server-side package
│   ├── /build/                 # Server-side production build output folder
│   ├── /helpers/               # Server-side helper lib
│   ├── /middleware/            # Middleware server logic
│   ├── /users/                 # MongoDB user schema model definition
│   ├── Dockerfile              # Commands for building Docker image for production
│   ├── gulpfile.babel.js       # Gulp tasks to compile server source files
│   ├── package.json            # List of 3rd party libraries and utilities
│   └── server.js               # Server-side startup script
├── docker-compose.yml          # Commands to bring up app services
└── config.js                   # Environment variables config file
```
## Development
You can develop on this project in two ways:

1. Docker method:  Run the single command below and start hacking
2. Piecemeal method:  Start up the backend server, then start up the client-side webpack dev server

### Docker Setup

1. Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`
2. Open browser at `http://localhost:8080`

This will bring up the Redis and MongoDB containers and start up webpack-dev-server at `http://0.0.0.0:8080` in a container and mount the `/client` folder inside the frontend container so changes can be made live.

### Client Setup

1. `cd` to `/client` folder in this repo
2. Run `npm install`
3. Run `npm run dev`

Local webpack dev server will now be started at `http://localhost:8080`.  

### Server Setup

1. `cd` to `/server` folder in this repo
2. Run `redis-server` to start up Redis server
3. Run `mongod` to start up MongoDB server
4. Run `npm install` to install npm modules 
5. Run `npm start` to build and start backend server

Express server with redis and mongo clients will now be started at `http://localhost:3000`.

## Production

1. Run `docker-compose up`
2. Navigate to `http://localhost:4000`

## Resources

- Insall Redis on Mac OS X via Homebrew [https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298)
- Install MongoDB on Mac OS X [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- Install Docker [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)
