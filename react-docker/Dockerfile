FROM node:20-alpine


USER app

WORKDIR /app

COPY package*.json ./

USER root



RUN npm install

COPY . . /app/

EXPOSE 5173


CMD npm run dev
