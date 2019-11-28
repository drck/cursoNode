FROM node:10
WORKDIR /use/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "renameRemove.js"]

