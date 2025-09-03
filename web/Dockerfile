FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY public ./public
COPY src ./src

RUN npm install
RUN npm run build

# Serve with a simple static server
RUN npm install -g serve

EXPOSE 3001

CMD ["npm", "start"]