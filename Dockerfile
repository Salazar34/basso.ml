FROM node:alpine

WORKDIR /app

COPY . /app/

RUN npm ci

CMD [ "npm", "start" ]
