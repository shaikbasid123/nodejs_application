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

# Production stage
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


