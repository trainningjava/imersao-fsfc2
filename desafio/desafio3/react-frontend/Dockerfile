FROM node:latest

WORKDIR /usr/app

COPY ./react-frontend/package.json .

RUN npm install

COPY ./react-frontend .

EXPOSE 3000

CMD [ "npm", "start" ]