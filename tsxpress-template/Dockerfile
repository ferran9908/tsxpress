FROM node:latest

WORKDIR /usr/app

COPY package.json ./

run npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

