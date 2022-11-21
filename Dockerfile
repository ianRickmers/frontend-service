FROM node:16-alpine
WORKDIR /frontend-service
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
COPY . ./