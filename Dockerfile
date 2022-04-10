FROM node:alpine

WORKDIR /app

COPY . /app/

RUN npm install && npm run build

RUN npm i -g server

EXPOSE 80

CMD ["serve", "-s", "build"]