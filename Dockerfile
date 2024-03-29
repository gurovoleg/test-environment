# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . ./

CMD ["npm", "start"]
