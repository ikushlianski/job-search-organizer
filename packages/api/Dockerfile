FROM node:14

# Create app directory
WORKDIR /jobsearchorg/api

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]
