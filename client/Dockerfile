FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/web
WORKDIR /usr/src/web

# Install app dependencies and build bundle
COPY . /usr/src/web
RUN npm install && npm run build

EXPOSE 4000
CMD [ "npm", "start" ]