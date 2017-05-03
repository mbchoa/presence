FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

# Install backend dependencies and build bundle
COPY . /usr/src/backend
RUN npm install && npm run build

EXPOSE 3000
CMD [ "npm", "start" ]