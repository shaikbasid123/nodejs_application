FROM node:20.19.4

WORKDIR /usr/src/app

COPY package*.json ./
COPY public ./public
COPY src ./src

RUN npm install
RUN npm run build

# Serve with a simple static server
RUN npm install -g serve

EXPOSE 3000

CMD ["npm", "start"]
