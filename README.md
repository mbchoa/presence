> # pres·ence
> ## /ˈprezəns/
> *noun*
>
> &nbsp;&nbsp;&nbsp;&nbsp;the state or fact of existing, occurring, or being present in a place or thing.

## Client Setup

1. `cd` to `/client` folder in this repo
2. Run `npm install`
3. Run `npm run dev`

Local webpack dev server will now be started at `http://localhost:8080`.  

## Server Setup

1. [Install Redis](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298)
2. [Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
3. `cd` to `/server` folder in this repo
4. Run `redis-server` to start up Redis server
5. Run `mongod` to start up MongoDB server
6. Run `npm install` to install npm modules 
7. Run `npm run build` to build `server.js`
8. Run `node build/server.js` to start server

Express server with redis and mongo clients will now be started at `http://localhost:3000`.

## Resources

- Insall Redis on Mac OS X via Homebrew [https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298)
- Install MongoDB on Mac OS X [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

