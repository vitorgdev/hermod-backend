FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

RUN npm install mocha -g --quiet

COPY . . 

EXPOSE 9000

CMD nodemon -L --watch . server.js