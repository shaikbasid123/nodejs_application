# FROM node:20.19.4

# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY public ./public
# COPY src ./src

# RUN npm install
# RUN npm run build

# # Serve with a simple static server
# RUN npm install -g serve

# EXPOSE 3000

# CMD ["npm", "start"]

FROM node:20.19.4 AS build
WORKDIR /usr/src/app
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build

# Serve with 'serve'
FROM node:20.19.4
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=build /usr/src/app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

